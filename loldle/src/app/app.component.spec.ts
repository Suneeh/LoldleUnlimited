import { AppComponent } from './app.component';
import { statTypeEnum } from './statTypeEnum';

describe('App Component', () => {
  let component: AppComponent;
  beforeEach(() => {
    component = new AppComponent();
  });

  describe('getYearFromString', () => {
    const testArr = [
      { date: '2010-06-24', number: 2010 },
      { date: '2011-09', number: 2011 },
      { date: '2012', number: 2012 },
      { date: '', number: NaN },
    ];
    testArr.forEach((testSet) => {
      it(`should render '${testSet.date}' as ${testSet.number}`, () => {
        expect(component.getYearFromString(testSet.date)).toEqual(testSet.number);
      });
    });
  });

  describe('guess', () => {
    it(`should empty the input`, () => {
      component.championInput.setValue('asdf');
      component.guess('Alistar');
      expect(component.championInput.getRawValue()).toBe('');
    });

    it(`should add champ to guessed list`, () => {
      component.correctCampion = null;
      const count = component.guessedChampList.length;
      component.guess('Alistar');
      expect(component.guessedChampList.length).toBe(count + 1);
    });

    it(`should win game`, () => {
      component.guess(component.correctCampion!.name);
      expect(component.gameWon).toBe(true);
      expect(component.allChamps).toEqual([]);
    });
  });

  describe('getClassDependingOnAmountEqualArrayElements', () => {
    const testArrNumbers = [
      { input: '2010', correct: '2011', output: 'lower' },
      { input: '2010', correct: '2009', output: 'higher' },
      { input: '2010', correct: '2010', output: 'correct' },
      { input: [], correct: '2010', output: 'wrong' },
      { input: '2010', correct: [], output: 'wrong' },
    ];
    testArrNumbers.forEach((testSet) => {
      it(`should handle '${testSet.output}' on number inputs`, () => {
        expect(component.getClassDependingOnAmountEqualArrayElements(testSet.input, testSet.correct, statTypeEnum.number)).toEqual(
          testSet.output
        );
      });
    });

    const testArrStrings = [
      { input: 'Ahri', correct: 'Ahri', output: 'correct' },
      { input: 'Annie', correct: 'Ahri', output: 'wrong' },
      { input: [], correct: 'Ahri', output: 'wrong' },
      { input: [], correct: [], output: 'wrong' },
    ];
    testArrStrings.forEach((testSet) => {
      it(`should handle '${testSet.output}' on string inputs`, () => {
        expect(component.getClassDependingOnAmountEqualArrayElements(testSet.input, testSet.correct, statTypeEnum.string)).toEqual(
          testSet.output
        );
      });
    });

    const testArrArrays = [
      { input: [], correct: [], output: 'correct' },
      { input: ['Top', 'Mid'], correct: ['Top', 'Mid'], output: 'correct' },
      { input: ['Mid', 'Top'], correct: ['Top', 'Mid'], output: 'correct' },
      { input: ['Top', 'Mid', 'Jungle'], correct: ['Top', 'Mid'], output: 'partial' },
      { input: ['Top', 'Mid'], correct: ['Top', 'Mid', 'Jungle'], output: 'partial' },
      { input: 'Top', correct: ['Top'], output: 'wrong' },
      { input: ['Top'], correct: 'Top', output: 'wrong' },
      { input: 'Top', correct: 'Top', output: 'wrong' },
    ];
    testArrArrays.forEach((testSet) => {
      it(`should handle '${testSet.output}' on array inputs`, () => {
        expect(component.getClassDependingOnAmountEqualArrayElements(testSet.input, testSet.correct, statTypeEnum.array)).toEqual(
          testSet.output
        );
      });
    });
  });
});
