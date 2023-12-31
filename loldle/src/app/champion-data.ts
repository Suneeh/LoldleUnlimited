export interface Champion {
  name: string;
  title: string;
  roles: string | string[];
  portrait: string;
  lanes: string | string[];
  region: string | string[];
  species: string | string[];
  releaseDate: string;
  resource: string;
  rangeType: string;
  // UNUSED
  splash: string;
  abilities: {};
  releasePatch: string;
  attackRange: number;
  ratings: {};
  spotlightVideoID: string;
  tagArrays: any[];
  ids: {};
}

export const ChampionData = [
  {
    name: 'Aatrox',
    title: 'the Darkin Blade',
    roles: ['Fighter', 'Tank'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Aatrox.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
    abilities: [
      {
        name: 'Deathbringer Stance',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Aatrox_Passive.png',
        description:
          "Periodically, Aatrox's next basic attack deals bonus <physicalDamage>physical damage</physicalDamage> and heals him, based on the target's max health. ",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_P1.webm',
      },
      {
        name: 'The Darkin Blade',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/AatroxQ.png',
        description:
          'Aatrox slams his greatsword down, dealing physical damage. He can swing three times, each with a different area of effect.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_Q1.webm',
      },
      {
        name: 'Infernal Chains',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/AatroxW.png',
        description:
          'Aatrox smashes the ground, dealing damage to the first enemy hit. Champions and large monsters have to leave the impact area quickly or they will be dragged to the center and take the damage again.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_W1.webm',
      },
      {
        name: 'Umbral Dash',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/AatroxE.png',
        description:
          'Passively, Aatrox heals when damaging enemy champions. On activation, he dashes in a direction.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_E1.webm',
      },
      {
        name: 'World Ender',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/AatroxR.png',
        description:
          'Aatrox unleashes his demonic form, fearing nearby enemy minions and gaining attack damage, increased healing, and movement speed. If he gets a takedown, this effect is extended.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_R1.webm',
      },
    ],
    splashPosition: '-653px -71px',
    lanes: ['Top'],
    releaseDate: '2013-06-13',
    resource: 'Blood Well',
    rangeType: 'Melee',
    releasePatch: 'V3.8',
    attackRange: 175,
    region: 'Runeterra',
    species: 'Darkin',
    ratings: {
      damage: 3,
      toughness: 3,
      control: 2,
      mobility: 2,
      utility: 2,
      difficulty: 2,
      style: 20,
      damageBreakdown: {
        magic: 0.4,
        physical: 99,
        true_: 0.6,
      },
    },
    spotlightVideoID: '0iiGWVhUqLA',
    tagArrays: [
      [1, 4, 5, 26, 66, 69],
      [53, 55],
      [80, 91, 101, 106],
      [80, 101, 106],
      [78, 83, 82, 101],
      [70, 13, 88, 94, 99, 108],
    ],
    ids: {
      kebab: 'aatrox',
      ddragon: 'Aatrox',
      cdragon: 266,
      wiki: 'Aatrox',
      universe: 'Aatrox',
    },
  },
  {
    name: 'Ahri',
    title: 'the Nine-Tailed Fox',
    roles: ['Assassin', 'Mage'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Ahri.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg',
    abilities: [
      {
        name: 'Essence Theft',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Ahri_SoulEater2.png',
        description:
          'When Ahri strikes 9 enemies with her abilities, her next ability also heals her for each enemy hit.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_P1.webm',
      },
      {
        name: 'Orb of Deception',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/AhriOrbofDeception.png',
        description:
          'Ahri sends out and pulls back her orb, dealing magic damage on the way out and true damage on the way back. ',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_Q1.webm',
      },
      {
        name: 'Fox-Fire',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/AhriFoxFire.png',
        description:
          'Ahri gains a brief burst of movement speed and releases three fox-fires, that lock onto and attack nearby enemies.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_W1.webm',
      },
      {
        name: 'Charm',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/AhriSeduce.png',
        description:
          'Ahri blows a kiss that damages and charms an enemy it encounters, instantly stopping movement abilities and causing them to walk harmlessly towards her. The target temporarily takes increased damage from Ahri.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_E1.webm',
      },
      {
        name: 'Spirit Rush',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/AhriTumble.png',
        description:
          'Ahri dashes forward and fires essence bolts, damaging nearby enemies. Spirit Rush can be cast up to three times before going on cooldown.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_R1.webm',
      },
    ],
    splashPosition: '-585px -34px',
    lanes: ['Middle'],
    releaseDate: '2011-12-14',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V1.0.0.131',
    attackRange: 550,
    region: 'Ionia',
    species: 'Vastayan',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 2,
      mobility: 3,
      utility: 1,
      difficulty: 2,
      style: 100,
      damageBreakdown: {
        magic: 68.9,
        physical: 7.1,
        true_: 24,
      },
    },
    spotlightVideoID: 'hlalkAUkwqE',
    tagArrays: [
      [26, 67, 68],
      [],
      [101, 106],
      [100, 108],
      [80, 8, 12, 101, 106],
      [78, 83, 82, 88, 91, 94, 101, 108],
    ],
    ids: {
      kebab: 'ahri',
      ddragon: 'Ahri',
      cdragon: 103,
      wiki: 'Ahri',
      universe: 'Ahri',
    },
  },
  {
    name: 'Akali',
    title: 'the Rogue Assassin',
    roles: ['Assassin'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Akali.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg',
    abilities: [
      {
        name: "Assassin's Mark",
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Akali_P.png',
        description:
          "Dealing spell damage to a champion creates a ring of energy around them. Exiting that ring empowers Akali's next autoattack with bonus range and damage.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_P1.webm',
      },
      {
        name: 'Five Point Strike',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/AkaliQ.png',
        description:
          'Akali throws out five kunai, dealing damage based on her bonus Attack Damage and Ability Power and slowing.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_Q1.webm',
      },
      {
        name: 'Twilight Shroud',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/AkaliW.png',
        description:
          'Akali drops a cover of smoke and briefly gains Movement Speed. While inside the shroud, Akali becomes invisible and unable to be selected by enemy spells and attacks. Attacking or using abilities will briefly reveal her.  ',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_W1.webm',
      },
      {
        name: 'Shuriken Flip',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/AkaliE.png',
        description:
          'Flip backward and fire a shuriken forward, dealing magic damage. The first enemy or smoke cloud hit is marked. Re-cast to dash to the marked target, dealing additional damage.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_E1.webm',
      },
      {
        name: 'Perfect Execution',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/AkaliR.png',
        description:
          'Akali leaps in a direction, damaging enemies she strikes. Re-cast: Akali dashes in a direction, executing all enemies she strikes.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_R1.webm',
      },
    ],
    splashPosition: ' -450px 0px',
    lanes: ['Middle', 'Top'],
    releaseDate: '2010-05-11',
    resource: 'Energy',
    rangeType: 'Melee',
    releasePatch: 'V1.0.0.85',
    attackRange: 125,
    region: 'Ionia',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 1,
      mobility: 3,
      utility: 1,
      difficulty: 2,
      style: 65,
      damageBreakdown: {
        magic: 89.4,
        physical: 6.1,
        true_: 4.4,
      },
    },
    spotlightVideoID: 'b-s2YVbRP8I',
    tagArrays: [
      [26, 63, 69],
      [53],
      [101, 106],
      [103],
      [78, 83, 82, 91, 101, 106],
      [78, 83, 82, 91, 101, 102, 106, 107],
    ],
    ids: {
      kebab: 'akali',
      ddragon: 'Akali',
      cdragon: 84,
      wiki: 'Akali',
      universe: 'Akali',
    },
  },
  {
    name: 'Akshan',
    title: 'the Rogue Sentinel',
    roles: ['Assassin', 'Marksman'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Akshan.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akshan_0.jpg',
    abilities: [
      {
        name: 'Dirty Fighting',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/akshan_p.Akshan.png',
        description:
          "Every three hits from Akshan's Attacks and Abilities deals bonus damage and grants him a Shield if the target was a champion.<br><br>When Akshan Attacks, he fires an additional Attack for reduced damage. If he cancels the additional Attack, he instead gains Move Speed.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0166/ability_0166_P1.webm',
      },
      {
        name: 'Avengerang',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/AkshanQ.png',
        description:
          'Akshan throws a boomerang that deals damage going out and coming back, extending its range each time it hits an enemy.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0166/ability_0166_Q1.webm',
      },
      {
        name: 'Going Rogue',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/AkshanW.png',
        description:
          'Akshan passively marks enemy champions as Scoundrels when they kill his ally champions. If Akshan kills a Scoundrel, he resurrects the allies they killed, gains bonus gold, and clears all marks.<br><br>When activated, Akshan enters camouflage and gains Move Speed and Mana Regen while moving towards Scoundrels. Akshan loses the camouflage quickly while he is not in brush or near terrain.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0166/ability_0166_W1.webm',
      },
      {
        name: 'Heroic Swing',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/AkshanE.png',
        description:
          'Akshan fires a grappling hook into terrain then swings around it, repeatedly firing at the nearest enemy while swinging. He can jump off early or gets knocked off when colliding with champions or terrain.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0166/ability_0166_E1.webm',
      },
      {
        name: 'Comeuppance',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/AkshanR.png',
        description:
          'Akshan locks onto an enemy champion and starts storing bullets. When released, he fires all stored bullets, dealing damage based on missing health to the first champion, minion, or structure hit.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0166/ability_0166_R1.webm',
      },
    ],
    splashPosition: '-651px -283px',
    lanes: ['Middle'],
    releaseDate: '2021-07-22',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V11.15',
    attackRange: 500,
    region: 'Shurima',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 1,
      mobility: 3,
      utility: 2,
      difficulty: 3,
      style: 1,
      damageBreakdown: {
        magic: 15.2,
        physical: 79.4,
        true_: 5.4,
      },
    },
    spotlightVideoID: 'Yrzk-24ZnPA',
    tagArrays: [
      [47, 67, 68],
      [52, 53],
      [101, 106],
      [88, 99],
      [78, 84, 82, 91, 101],
      [89, 91, 97, 102, 107],
    ],
    ids: {
      kebab: 'akshan',
      ddragon: 'Akshan',
      cdragon: 166,
      wiki: 'Akshan',
      universe: 'Akshan',
    },
  },
  {
    name: 'Alistar',
    title: 'the Minotaur',
    roles: ['Tank', 'Support'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Alistar.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg',
    abilities: [
      {
        name: 'Triumphant Roar',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Alistar_E.png',
        description:
          'Alistar charges his roar by stunning or displacing enemy champions or when nearby enemies die. When fully charged he heals himself all nearby allied champions.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_P1.webm',
      },
      {
        name: 'Pulverize',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/Pulverize.png',
        description:
          'Alistar smashes the ground, dealing damage to nearby enemies and tossing them into the air.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_Q1.webm',
      },
      {
        name: 'Headbutt',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/Headbutt.png',
        description:
          'Alistar rams a target with his head, dealing damage and knocking the target back.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_W1.webm',
      },
      {
        name: 'Trample',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/AlistarE.png',
        description:
          "Alistar tramples nearby enemy units, ignoring unit collision and gaining stacks if he damages an enemy champion. At full stacks Alistar's next basic attack against an enemy champion deals additional magic damage and stuns them.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_E1.webm',
      },
      {
        name: 'Unbreakable Will',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/FerociousHowl.png',
        description:
          'Alistar lets out a wild roar, removing all crowd control effects on himself, and reducing incoming physical and magical damage for the duration.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_R1.webm',
      },
    ],
    splashPosition: '-582px -167px',
    lanes: ['Support'],
    releaseDate: '2009-02-21',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V0.1.0.2',
    attackRange: 125,
    region: 'Runeterra',
    species: 'Minotaur',
    ratings: {
      damage: 1,
      toughness: 3,
      control: 3,
      mobility: 1,
      utility: 2,
      difficulty: 1,
      style: 65,
      damageBreakdown: {
        magic: 76.3,
        physical: 9.4,
        true_: 14.2,
      },
    },
    tagArrays: [
      [0, 4, 5, 2, 39, 67, 69],
      [88],
      [80, 99],
      [78, 80, 102, 107],
      [53, 80, 83, 82, 99],
      [70, 99],
    ],
    ids: {
      kebab: 'alistar',
      ddragon: 'Alistar',
      cdragon: 12,
      wiki: 'Alistar',
      universe: 'Alistar',
    },
    spotlightVideoID: 'k8nic2IMW-A',
  },
  {
    name: 'Amumu',
    title: 'the Sad Mummy',
    roles: ['Tank', 'Mage'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Amumu.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg',
    abilities: [
      {
        name: 'Cursed Touch',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Amumu_Passive.png',
        description:
          "Amumu's basic attacks <font color='#9b0f5f'>Curse</font> his enemies, causing them to take bonus true damage from incoming magic damage.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0032/ability_0032_P1.webm',
      },
      {
        name: 'Bandage Toss',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/BandageToss.png',
        description:
          'Amumu tosses a sticky bandage at a target, stunning and damaging the target while he pulls himself to them.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0032/ability_0032_Q1.webm',
      },
      {
        name: 'Despair',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/AuraofDespair.png',
        description:
          "Overcome by anguish, nearby enemies lose a percentage of their maximum Health each second and have their <font color='#9b0f5f'>Curses</font> refreshed.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0032/ability_0032_W1.webm',
      },
      {
        name: 'Tantrum',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/Tantrum.png',
        description:
          'Permanently reduces the physical damage Amumu would take. Amumu can unleash his rage, dealing damage to surrounding enemies. Each time Amumu is hit, the cooldown on Tantrum is reduced by 0.5 seconds.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0032/ability_0032_E1.webm',
      },
      {
        name: 'Curse of the Sad Mummy',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/CurseoftheSadMummy.png',
        description:
          'Amumu entangles surrounding enemy units in bandages, applying his <keywordMajor>Curse</keywordMajor>, damaging and stunning them.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0032/ability_0032_R1.webm',
      },
    ],
    splashPosition: '-679px -145px',
    lanes: ['Support'],
    releaseDate: '2009-06-26',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V0.7.20.112',
    attackRange: 125,
    region: 'Shurima',
    species: 'Unknown',
    ratings: {
      damage: 2,
      toughness: 3,
      control: 3,
      mobility: 1,
      utility: 1,
      difficulty: 1,
      style: 90,
      damageBreakdown: {
        magic: 74.2,
        physical: 8,
        true_: 17.7,
      },
    },
    tagArrays: [
      [0, 2, 67, 69],
      [55],
      [78, 80, 83, 82, 101],
      [92, 99],
      [99],
      [80, 8, 99],
    ],
    ids: {
      kebab: 'amumu',
      ddragon: 'Amumu',
      cdragon: 32,
      wiki: 'Amumu',
      universe: 'Amumu',
    },
    spotlightVideoID: 'dceS7yaTV5g',
  },
  {
    name: 'Anivia',
    title: 'the Cryophoenix',
    roles: ['Mage', 'Support'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Anivia.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_0.jpg',
    abilities: [
      {
        name: 'Rebirth',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Anivia_P.png',
        description:
          'Upon taking fatal damage, Anivia reverts to an egg and is reborn with full health.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0034/ability_0034_P1.webm',
      },
      {
        name: 'Flash Frost',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/FlashFrost.png',
        description:
          'Anivia brings her wings together and summons a sphere of ice that flies towards her opponents, chilling and damaging anyone in its path. When the sphere explodes it does moderate damage in a radius, stunning anyone in the area.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0034/ability_0034_Q1.webm',
      },
      {
        name: 'Crystallize',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/Crystallize.png',
        description:
          'Anivia condenses the moisture in the air into an impassable wall of ice to block all movement. The wall only lasts a short duration before it melts.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0034/ability_0034_W1.webm',
      },
      {
        name: 'Frostbite',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/Frostbite.png',
        description:
          'With a flap of her wings, Anivia blasts a freezing gust of wind at her target, dealing damage. If the target was recently hit by Flash Frost or damaged by a fully formed Glacial Storm, the damage they take is doubled.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0034/ability_0034_E1.webm',
      },
      {
        name: 'Glacial Storm',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/GlacialStorm.png',
        description:
          'Anivia summons a driving rain of ice and hail to damage her enemies and slow their advance.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0034/ability_0034_R1.webm',
      },
    ],
    splashPosition: '-517px -140px',
    lanes: ['Middle'],
    releaseDate: '2009-07-10',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V0.7.20.113',
    attackRange: 600,
    region: 'Freljord',
    species: 'Spirit God',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 3,
      mobility: 1,
      utility: 2,
      difficulty: 3,
      style: 100,
      damageBreakdown: {
        magic: 92.8,
        physical: 5.4,
        true_: 1.9,
      },
    },
    spotlightVideoID: '8Syose1O568',
    tagArrays: [
      [4, 26, 2, 47, 67, 68],
      [],
      [80, 91, 101],
      [103],
      [102, 107],
      [92, 103],
    ],
    ids: {
      kebab: 'anivia',
      ddragon: 'Anivia',
      cdragon: 34,
      wiki: 'Anivia',
      universe: 'Anivia',
    },
  },
  {
    name: 'Annie',
    title: 'the Dark Child',
    roles: ['Mage'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Annie.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg',
    abilities: [
      {
        name: 'Pyromania',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Annie_Passive.png',
        description:
          "After casting 4 spells, Annie's next offensive spell will stun the target.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0001/ability_0001_P1.webm',
      },
      {
        name: 'Disintegrate',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/AnnieQ.png',
        description:
          'Annie hurls a Mana infused fireball, dealing damage and refunding the Mana cost if it destroys the target.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0001/ability_0001_Q1.webm',
      },
      {
        name: 'Incinerate',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/AnnieW.png',
        description:
          'Annie casts a blazing cone of fire, dealing damage to all enemies in the area.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0001/ability_0001_W1.webm',
      },
      {
        name: 'Molten Shield',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/AnnieE.png',
        description:
          'Grants Annie or an ally a shield, a burst of Movement Speed, and damages enemies who attack her with basic attacks.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0001/ability_0001_E1.webm',
      },
      {
        name: 'Summon: Tibbers',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/AnnieR.png',
        description:
          'Annie wills her bear Tibbers to life, dealing damage to units in the area. Tibbers can attack and also burns enemies that stand near him.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0001/ability_0001_R1.webm',
      },
    ],
    splashPosition: '-794px -1070x',
    lanes: ['Middle'],
    releaseDate: '2009-02-21',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V0.1.0.2',
    attackRange: 625,
    region: 'Runeterra',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 3,
      mobility: 1,
      utility: 2,
      difficulty: 1,
      style: 100,
      damageBreakdown: {
        magic: 92.6,
        physical: 4.4,
        true_: 3,
      },
    },
    tagArrays: [
      [2, 67, 68],
      [80, 104],
      [88, 94, 95, 102, 107],
      [101],
      [102, 107],
      [91, 103],
    ],
    ids: {
      kebab: 'annie',
      ddragon: 'Annie',
      cdragon: 1,
      wiki: 'Annie',
      universe: 'Annie',
    },
    spotlightVideoID: 'lB8iPgGWkgM',
  },
  {
    name: 'Aphelios',
    title: 'the Weapon of the Faithful',
    roles: ['Marksman'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Aphelios.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_0.jpg',
    abilities: [
      {
        name: 'The Hitman and the Seer',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/ApheliosP.png',
        description:
          "Aphelios wields 5 Lunari Weapons made by his sister Alune. He has access to two at a time: one main-hand and one off-hand. Each weapon has a unique Basic Attack and Ability. Attacks and abilities consume a weapon's ammo. When out of ammo, Aphelios discards the weapon and Alune summons the next of the 5. ",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm',
      },
      {
        name: 'Weapon Abilites',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ApheliosQ_ClientTooltipWrapper.png',
        description:
          'Aphelios has 5 different activated abilities, based on his main-hand weapon:<br><br>Calibrum (Rifle): Long range shot that marks its target for a long-range follow-up attack.<br>Severum (Scythe Pistol): Run fast while attacking nearby enemies with both weapons.<br>Gravitum (Cannon): Root all enemies slowed by this weapon.<br>Infernum (Flamethrower): Blast enemies in a cone and attack them with your off-hand weapon.<br>Crescendum (Chakram): Deploy a sentry that shoots your off-hand weapon.<br>',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_Q1.webm',
      },
      {
        name: 'Phase',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ApheliosW.png',
        description:
          'Aphelios swaps his main-hand gun with his off-hand gun, replacing his basic attack and activated ability.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_W1.webm',
      },
      {
        name: 'Weapon Queue System',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ApheliosE_ClientTooltipWrapper.png',
        description:
          'Aphelios has no third ability. This slot shows the next weapon Alune will give him. Weapon order begins fixed but may change over game time -- when a weapon is out of ammo it goes to the end of the order.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_E1.webm',
      },
      {
        name: 'Moonlight Vigil',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ApheliosR.png',
        description:
          "Fire a concentrated blast of moonlight that explodes on enemy champions. Applies the unique effect of Aphelios' main-hand gun.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_R1.webm',
      },
    ],
    splashPosition: '-551px -13px',
    lanes: ['Bottom'],
    releaseDate: '2019-12-11',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V9.24',
    attackRange: 550,
    region: 'Targon',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 2,
      mobility: 1,
      utility: 1,
      difficulty: 3,
      style: 20,
      damageBreakdown: {
        magic: 4.8,
        physical: 88.5,
        true_: 6.7,
      },
    },
    spotlightVideoID: 'lDoeuuBRUFg',
    tagArrays: [[26, 67, 68], [76, 104], [27, 103], [99], [98], [101]],
    ids: {
      kebab: 'aphelios',
      ddragon: 'Aphelios',
      cdragon: 523,
      wiki: 'Aphelios',
      universe: 'Aphelios',
    },
  },
  {
    name: 'Ashe',
    title: 'the Frost Archer',
    roles: ['Marksman', 'Support'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Ashe.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg',
    abilities: [
      {
        name: 'Frost Shot',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Ashe_P.png',
        description:
          "Ashe's attacks slow their target, causing her to deal increased damage to these targets.<br><br>Ashe's critical strikes deal no bonus damage but apply an empowered slow to the target.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0022/ability_0022_P1.webm',
      },
      {
        name: "Ranger's Focus",
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/AsheQ.png',
        description:
          "Ashe builds up Focus by attacking. At maximum Focus, Ashe can cast Ranger's Focus to consume all stacks of Focus, temporarily increasing her Attack Speed and transforming her basic attack into a powerful flurry attack for the duration.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0022/ability_0022_Q1.webm',
      },
      {
        name: 'Volley',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/Volley.png',
        description:
          'Ashe fires arrows in a cone for increased damage. Also applies Frost Shot.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0022/ability_0022_W1.webm',
      },
      {
        name: 'Hawkshot',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/AsheSpiritOfTheHawk.png',
        description:
          'Ashe sends her Hawk Spirit on a scouting mission anywhere on the map.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0022/ability_0022_E1.webm',
      },
      {
        name: 'Enchanted Crystal Arrow',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/EnchantedCrystalArrow.png',
        description:
          'Ashe fires a missile of ice in a straight line. If the arrow collides with an enemy Champion, it deals damage and stuns the Champion, stunning for longer the farther arrow has traveled. In addition, surrounding enemy units take damage and are slowed.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0022/ability_0022_R1.webm',
      },
    ],
    splashPosition: '-599px -63px',
    lanes: ['Support', 'Bottom'],
    releaseDate: '2009-02-21',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V0.1.0.2',
    attackRange: 600,
    region: 'Freljord',
    species: 'Human',
    ratings: {
      damage: 2,
      toughness: 1,
      control: 3,
      mobility: 1,
      utility: 2,
      difficulty: 1,
      style: 20,
      damageBreakdown: {
        magic: 13.5,
        physical: 81.8,
        true_: 4.7,
      },
    },
    spotlightVideoID: 'mSbMQ5xDnEg',
    tagArrays: [
      [26, 2, 67, 68],
      [53],
      [52, 99],
      [101],
      [87, 105, 103],
      [80, 87, 101],
    ],
    ids: {
      kebab: 'ashe',
      ddragon: 'Ashe',
      cdragon: 22,
      wiki: 'Ashe',
      universe: 'Ashe',
    },
  },
  {
    name: 'Aurelion Sol',
    title: 'The Star Forger',
    roles: ['Mage'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/AurelionSol.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_0.jpg',
    abilities: [
      {
        name: 'Center of the Universe',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/AurelionSol_Passive.png',
        description:
          'Stars orbit Aurelion Sol, dealing magic damage when they hit an enemy.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0136/ability_0136_P1.webm',
      },
      {
        name: 'Starsurge',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/AurelionSolQ.png',
        description:
          'Aurelion Sol creates an expanding disk, which explodes to stun and damage enemies when it moves too far away from him.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0136/ability_0136_Q1.webm',
      },
      {
        name: 'Celestial Expansion',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/AurelionSolW.png',
        description:
          'Aurelion Sol pushes his stars farther out, increasing their damage and speed.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0136/ability_0136_W1.webm',
      },
      {
        name: 'Comet of Legend',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/AurelionSolE.png',
        description: 'Aurelion Sol takes off flying for a long distance.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0136/ability_0136_E1.webm',
      },
      {
        name: 'Voice of Light',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/AurelionSolR.png',
        description:
          'Aurelion Sol projects a blast of pure starfire, damaging and slowing all enemies caught in it and knocking nearby enemies back to a safer distance.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0136/ability_0136_R1.webm',
      },
    ],
    splashPosition: '-532px -38px',
    lanes: ['Middle'],
    releaseDate: '2016-03-24',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V6.6',
    attackRange: 550,
    region: 'Targon',
    species: 'Celestial',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 2,
      mobility: 2,
      utility: 1,
      difficulty: 3,
      style: 100,
      damageBreakdown: {
        magic: 88.1,
        physical: 7.1,
        true_: 4.8,
      },
    },
    spotlightVideoID: 'HM520graePQ',
    tagArrays: [
      [4, 26, 2, 67, 68],
      [],
      [80, 91, 101],
      [91, 99],
      [78, 83, 82, 91, 101],
      [80, 89, 101],
    ],
    ids: {
      kebab: 'aurelion-sol',
      ddragon: 'AurelionSol',
      cdragon: 136,
      wiki: 'Aurelion_Sol',
      universe: 'AurelionSol',
    },
  },
  {
    name: 'Azir',
    title: 'the Emperor of the Sands',
    roles: ['Mage', 'Marksman'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Azir.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg',
    abilities: [
      {
        name: "Shurima's Legacy",
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Azir_Passive.png',
        description:
          'Azir can summon the Disc of the Sun from the ruins of allied or enemy turrets.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0268/ability_0268_P1.webm',
      },
      {
        name: 'Conquering Sands',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/AzirQWrapper.png',
        description:
          'Azir sends all Sand Soldiers towards a location. Sand Soldiers deal magic damage to enemies they pass through and apply a slow for 1 second.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0268/ability_0268_Q1.webm',
      },
      {
        name: 'Arise!',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/AzirW.png',
        description:
          "Azir summons a Sand Soldier to attack nearby targets for him, replacing his basic attack against targets within the soldier's range. Their attacks deal magic damage to enemies in a line. Arise! also passively grants attack speed to Azir and his Sand Soldiers.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0268/ability_0268_W1.webm',
      },
      {
        name: 'Shifting Sands',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/AzirEWrapper.png',
        description:
          'Azir shields himself briefly and dashes to one of his Sand Soldiers, damaging enemies. If he hits an enemy champion, he instantly readies a new Sand Soldier for deployment and halts his dash.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0268/ability_0268_E1.webm',
      },
      {
        name: "Emperor's Divide",
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/AzirR.png',
        description:
          'Azir summons a wall of soldiers which charge forward, knocking back and damaging enemies.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0268/ability_0268_R1.webm',
      },
    ],
    splashPosition: '-743px -56px',
    lanes: ['Middle'],
    releaseDate: '2014-09-16',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V4.16',
    attackRange: 525,
    region: 'Shurima',
    species: 'God-Warrior',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 2,
      mobility: 2,
      utility: 1,
      difficulty: 2,
      style: 45,
      damageBreakdown: {
        magic: 96.3,
        physical: 3,
        true_: 0.8,
      },
    },
    spotlightVideoID: 'zqH4AA-KEgQ',
    tagArrays: [
      [4, 26, 67, 68],
      [],
      [101],
      [103],
      [78, 83, 82, 102],
      [80, 101],
    ],
    ids: {
      kebab: 'azir',
      ddragon: 'Azir',
      cdragon: 268,
      wiki: 'Azir',
      universe: 'Azir',
    },
  },
  {
    name: 'Bard',
    title: 'the Wandering Caretaker',
    roles: ['Mage', 'Support'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Bard.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg',
    abilities: [
      {
        name: "Traveler's Call",
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Bard_Passive.png',
        description:
          "<font color='#FF9900'>Meeps:</font> Bard attracts lesser spirits that assist with his basic attacks to deal extra magic damage. When Bard has collected enough  <font color='#cccc00'>Chimes</font>, his meeps will also deal damage in an area and slow enemies hit.<br><br><font color='#FF9900'>Chimes:</font> Ancient <font color='#cccc00'>chimes</font> randomly appear for Bard to collect. These grant experience, restore mana, and provide out of combat Move Speed.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0432/ability_0432_P1.webm',
      },
      {
        name: 'Cosmic Binding',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/BardQ.png',
        description:
          'Bard fires a missile which will slow the first enemy struck, and continue onward. If it strikes a wall, it will stun the initial target; if it strikes another enemy, it will stun them both.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0432/ability_0432_Q1.webm',
      },
      {
        name: "Caretaker's Shrine",
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/BardW.png',
        description:
          'Reveals a healing shrine which powers up over a short time, disappearing after healing and speeding up the first ally that touches it.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0432/ability_0432_W1.webm',
      },
      {
        name: 'Magical Journey',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/BardE.png',
        description:
          'Bard opens a portal in nearby terrain. Allies and enemies alike can take a one-way trip through that terrain by moving into the portal.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0432/ability_0432_E1.webm',
      },
      {
        name: 'Tempered Fate',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/BardR.png',
        description:
          'Bard sends spirit energy arcing to a location, putting all champions, minions, monsters, and turrets hit into stasis for a brief time.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0432/ability_0432_R1.webm',
      },
    ],
    splashPosition: '-644px -37px',
    lanes: ['Support'],
    releaseDate: '2015-03-12',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V5.5',
    attackRange: 500,
    region: 'Runeterra',
    species: 'Celestial',
    ratings: {
      damage: 1,
      toughness: 1,
      control: 3,
      mobility: 2,
      utility: 3,
      difficulty: 3,
      style: 65,
      damageBreakdown: {
        magic: 75.9,
        physical: 17.4,
        true_: 6.7,
      },
    },
    spotlightVideoID: '-tNDoXIYptk',
    tagArrays: [
      [26, 2, 33, 67, 68],
      [53, 73],
      [80, 101],
      [103],
      [101],
      [80, 28, 103],
    ],
    ids: {
      kebab: 'bard',
      ddragon: 'Bard',
      cdragon: 432,
      wiki: 'Bard',
      universe: 'Bard',
    },
  },
  {
    ids: {
      cdragon: 200,
      ddragon: 'Belveth',
      kebab: 'bel-veth',
      universe: 'Belveth',
      wiki: "Bel'Veth",
    },
    name: "Bel'Veth",
    title: 'the Empress of the Void',
    roles: ['Fighter'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/12.11.1/img/champion/Belveth.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Belveth_0.jpg',
    resource: 'Mana',
    attackRange: 125,
    abilities: [
      {
        name: 'Death in Lavender ',
        img: 'https://ddragon.leagueoflegends.com/cdn/12.11.1/img/passive/Belveth_Passive.Belveth.png',
        description:
          "Bel'Veth gains permanent attack speed stacks after taking down large monsters and champions. She also gains temporary bonus attack speed after using an ability.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0200/ability_0200_P1.webm',
      },
      {
        name: 'Void Surge',
        img: 'https://ddragon.leagueoflegends.com/cdn/12.11.1/img/spell/BelvethQ.png',
        description:
          "Bel'Veth dashes in a chosen direction and damages all enemies she passes through.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0200/ability_0200_Q1.webm',
      },
      {
        name: 'Above and Below',
        img: 'https://ddragon.leagueoflegends.com/cdn/12.11.1/img/spell/BelvethW.png',
        description:
          "Bel'Veth slams her tail to the ground, damaging, knocking up, and slowing her enemies.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0200/ability_0200_W1.webm',
      },
      {
        name: 'Royal Maelstrom',
        img: 'https://ddragon.leagueoflegends.com/cdn/12.11.1/img/spell/BelvethE.png',
        description:
          "Bel'Veth roots herself in place, channeling a storm of slashes around her that targets the lowest-health enemy and grants her lifesteal and damage reduction.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0200/ability_0200_E1.webm',
      },
      {
        name: 'Endless Banquet',
        img: 'https://ddragon.leagueoflegends.com/cdn/12.11.1/img/spell/BelvethR.png',
        description:
          "Bel'Veth consumes Void coral remnants, transforming into a her true form and increasing her max health, attack range, attack speed, and out-of-combat movement speed. Consuming the Void coral remnants of a Void epic monster will grant her a longer ultimate duration, as well as the power to summon Void remora.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0200/ability_0200_R1.webm',
      },
    ],
    ratings: {
      difficulty: 2,
      style: 10,
      damage: 3,
      toughness: 1,
      control: 2,
      mobility: 3,
      utility: 1,
      damageBreakdown: {
        magic: 16,
        physical: 59.5,
        true_: 24.5,
      },
    },
    lanes: ['Jungle'],
    lane: 'Jungle',
    releaseDate: '2022-06-09',
    releasePatch: 'V12.11',
    region: 'Void',
    species: 'Voidborn',
    spotlightVideoID: 'lZC0QV4N3OU',
    rangeType: 'Melee',
    tagArrays: [
      [69],
      [88, 73],
      [91, 75, 105, 101],
      [101],
      [108, 100],
      [88, 94, 102],
    ],
  },
  {
    name: 'Blitzcrank',
    title: 'the Great Steam Golem',
    roles: ['Fighter', 'Tank'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Blitzcrank.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_0.jpg',
    abilities: [
      {
        name: 'Mana Barrier',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Blitzcrank_ManaBarrier.png',
        description:
          'Blitzcrank gains a shield based on his mana when dropping to low health.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0053/ability_0053_P1.webm',
      },
      {
        name: 'Rocket Grab',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/RocketGrab.png',
        description:
          'Blitzcrank fires his right hand to grab an opponent on its path, dealing damage and dragging it back to him.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0053/ability_0053_Q1.webm',
      },
      {
        name: 'Overdrive',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/Overdrive.png',
        description:
          'Blitzcrank super charges himself to get dramatically increased Move and Attack Speed. He is temporarily slowed after the effect ends.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0053/ability_0053_W1.webm',
      },
      {
        name: 'Power Fist',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/PowerFist.png',
        description:
          'Blitzcrank charges up his fist to make his next attack deal double damage and pop his target up in the air.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0053/ability_0053_E1.webm',
      },
      {
        name: 'Static Field',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/StaticField.png',
        description:
          "Enemies attacked by Blitzcrank are marked and take lightning damage after 1 second. Additionally, Blitzcrank can activate this ability to remove nearby enemies' shields, damage them, and silence them briefly.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0053/ability_0053_R1.webm',
      },
    ],
    splashPosition: '-638px -115px',
    lanes: ['Support'],
    releaseDate: '2009-09-02',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V0.9.22.16',
    attackRange: 125,
    region: 'Zaun',
    species: 'Golem',
    ratings: {
      damage: 1,
      toughness: 2,
      control: 3,
      mobility: 1,
      utility: 1,
      difficulty: 1,
      style: 90,
      damageBreakdown: {
        magic: 65.4,
        physical: 23,
        true_: 11.6,
      },
    },
    spotlightVideoID: 'WtmMC23DdT0',
    tagArrays: [[5, 1, 2, 67, 69], [], [80, 101], [99], [53, 80, 99], [22, 99]],
    ids: {
      kebab: 'blitzcrank',
      ddragon: 'Blitzcrank',
      cdragon: 53,
      wiki: 'Blitzcrank',
      universe: 'Blitzcrank',
    },
  },
  {
    name: 'Brand',
    title: 'the Burning Vengeance',
    roles: ['Mage'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Brand.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_0.jpg',
    abilities: [
      {
        name: 'Blaze',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/BrandP.png',
        description:
          "Brand's spells light his targets ablaze, dealing damage over 4 seconds, stacking up to 3 times. If Brand kills an enemy while it is ablaze he regains mana. When Blaze reaches max stacks on a Champion or large monster, it becomes unstable. It detonates in 2 seconds, applying spell effects and dealing massive damage in an area around the victim.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0063/ability_0063_P1.webm',
      },
      {
        name: 'Sear',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/BrandQ.png',
        description:
          'Brand launches a ball of fire forward that deals magic damage. If the target is ablaze, Sear will stun the target for 1.5 seconds.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0063/ability_0063_Q1.webm',
      },
      {
        name: 'Pillar of Flame',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/BrandW.png',
        description:
          'After a short delay, Brand creates a Pillar of Flame at a target area, dealing magic damage to enemy units within the area. Units that are ablaze take an additional 25% damage.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0063/ability_0063_W1.webm',
      },
      {
        name: 'Conflagration',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/BrandE.png',
        description:
          "Brand conjures a powerful blast at his target that spreads to nearby enemies, dealing magic damage. If the target is ablaze, Conflagration's spread is doubled.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0063/ability_0063_E1.webm',
      },
      {
        name: 'Pyroclasm',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/BrandR.png',
        description:
          'Brand unleashes a devastating torrent of fire that bounces up to 5 times off of Brand and nearby enemies, dealing magic damage to enemies each time bounce. Bounces prioritize stacking Blaze to max on Champions. If a target is ablaze, Pyroclasm will briefly slow them.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0063/ability_0063_R1.webm',
      },
    ],
    splashPosition: '-759px -80 px',
    lanes: ['Support'],
    releaseDate: '2011-04-12',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V1.0.0.115',
    attackRange: 550,
    region: 'Runeterra',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 2,
      mobility: 1,
      utility: 1,
      difficulty: 2,
      style: 100,
      damageBreakdown: {
        magic: 94.3,
        physical: 2.6,
        true_: 3,
      },
    },
    spotlightVideoID: 'vvuAw6KNn2E',
    tagArrays: [[26, 2, 67, 68], [], [80, 101], [103], [102], [102]],
    ids: {
      kebab: 'brand',
      ddragon: 'Brand',
      cdragon: 63,
      wiki: 'Brand',
      universe: 'Brand',
    },
  },
  {
    name: 'Braum',
    title: 'the Heart of the Freljord',
    roles: ['Tank', 'Support'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Braum.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_0.jpg',
    abilities: [
      {
        name: 'Concussive Blows',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Braum_Passive.png',
        description:
          "Braum's basic attacks apply Concussive Blows. Once the first stack is applied, <font color='#FFF673'>ally</font> basic attacks also stack Concussive Blows. <br><br>Upon reaching 4 stacks, the target is stunned and takes magic damage. For the next few seconds they cannot receive new stacks, but take bonus magic damage from Braum's attacks.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0201/ability_0201_P1.webm',
      },
      {
        name: "Winter's Bite",
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/BraumQ.png',
        description:
          "Braum propels freezing ice from his shield, slowing and dealing magic damage.<br><br>Applies a stack of <font color='#FFF673'>Concussive Blows</font>.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0201/ability_0201_Q1.webm',
      },
      {
        name: 'Stand Behind Me',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/BraumW.png',
        description:
          'Braum leaps to a target allied champion or minion. On arrival, Braum and the ally gain Armor and Magic Resist for a few seconds.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0201/ability_0201_W1.webm',
      },
      {
        name: 'Unbreakable',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/BraumE.png',
        description:
          'Braum raises his shield in a direction for several seconds, intercepting all projectiles causing them to hit him and be destroyed. He negates the damage of the first attack completely and reduces the damage of all subsequent attacks from this direction.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0201/ability_0201_E1.webm',
      },
      {
        name: 'Glacial Fissure',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/BraumRWrapper.png',
        description:
          'Braum slams the ground, knocking up enemies nearby and in a line in front of him. A fissure is left along the line that slows enemies.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0201/ability_0201_R1.webm',
      },
    ],
    splashPosition: '-776px -56px',
    lanes: ['Support'],
    releaseDate: '2014-05-12',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V4.7',
    attackRange: 125,
    region: 'Freljord',
    species: 'Human',
    ratings: {
      damage: 1,
      toughness: 2,
      control: 3,
      mobility: 1,
      utility: 2,
      difficulty: 2,
      style: 90,
      damageBreakdown: {
        magic: 84.1,
        physical: 11.2,
        true_: 4.7,
      },
    },
    spotlightVideoID: 'ajUghBnxZQA',
    tagArrays: [
      [5, 26, 2, 67, 69],
      [53, 80],
      [101],
      [78, 83, 82, 102],
      [101],
      [80, 101],
    ],
    ids: {
      kebab: 'braum',
      ddragon: 'Braum',
      cdragon: 201,
      wiki: 'Braum',
      universe: 'Braum',
    },
  },
  {
    name: 'Caitlyn',
    title: 'the Sheriff of Piltover',
    roles: ['Marksman'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Caitlyn.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg',
    abilities: [
      {
        name: 'Headshot',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Caitlyn_Headshot.png',
        description:
          "Every few basic attacks, or against a target she has trapped or netted, Caitlyn will fire a headshot dealing bonus damage that scales with her critical strike chance. On trapped or netted targets, Caitlyn's Headshot attack range is doubled.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0051/ability_0051_P1.webm',
      },
      {
        name: 'Piltover Peacemaker',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/CaitlynQ.png',
        description:
          'Caitlyn revs up her rifle for 1 second to unleash a penetrating shot that deals physical damage (deals less damage to subsequent targets).',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0051/ability_0051_Q1.webm',
      },
      {
        name: 'Yordle Snap Trap',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/CaitlynW.png',
        description:
          'Caitlyn sets a trap to find sneaky yordles. When sprung, the trap reveals and immobilizes the enemy champion for 1.5 seconds, granting Caitlyn an empowered Headshot.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0051/ability_0051_W1.webm',
      },
      {
        name: '90 Caliber Net',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/CaitlynE.png',
        description:
          'Caitlyn fires a heavy net to slow her target. The recoil knocks Caitlyn back.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0051/ability_0051_E1.webm',
      },
      {
        name: 'Ace in the Hole',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/CaitlynR.png',
        description:
          'Caitlyn takes time to line up the perfect shot, dealing massive damage to a single target at a huge range. Enemy champions can intercept the bullet for their ally.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0051/ability_0051_R1.webm',
      },
    ],
    splashPosition: '-731px -59px',
    lanes: ['Bottom'],
    releaseDate: '2011-01-04',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V1.0.0.108',
    attackRange: 650,
    region: 'Piltover',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 2,
      mobility: 2,
      utility: 1,
      difficulty: 1,
      style: 10,
      damageBreakdown: {
        magic: 6.1,
        physical: 90.4,
        true_: 3.5,
      },
    },
    spotlightVideoID: 'KFNFY6-gaDA',
    tagArrays: [
      [26, 67, 68],
      [53],
      [101],
      [80, 27, 103, 105],
      [78, 83, 82, 101],
      [79, 89, 97, 102],
    ],
    ids: {
      kebab: 'caitlyn',
      ddragon: 'Caitlyn',
      cdragon: 51,
      wiki: 'Caitlyn',
      universe: 'Caitlyn',
    },
  },
  {
    name: 'Camille',
    title: 'the Steel Shadow',
    roles: ['Fighter', 'Tank'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Camille.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Camille_0.jpg',
    abilities: [
      {
        name: 'Adaptive Defenses',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Camille_Passive.png',
        description:
          "Basic attacks on champions grant a shield equal to a percentage of Camille's maximum health against their damage type (Physical or Magic) for a brief duration.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0164/ability_0164_P1.webm',
      },
      {
        name: 'Precision Protocol',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/CamilleQ.png',
        description:
          "Camille's next attack deals bonus damage and grants bonus movement speed. This spell can be recast for a short period of time, doing significantly increased bonus damage if Camille delays a period of time between the two attacks.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0164/ability_0164_Q1.webm',
      },
      {
        name: 'Tactical Sweep',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/CamilleW.png',
        description:
          'Camille blasts in a cone after a delay, dealing damage. Enemies in the outer half are slowed and take extra damage, while also healing Camille.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0164/ability_0164_W1.webm',
      },
      {
        name: 'Hookshot',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/CamilleE.png',
        description:
          'Camille pulls herself to a wall, leaping off and knocking up enemy champions upon landing.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0164/ability_0164_E1.webm',
      },
      {
        name: 'The Hextech Ultimatum',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/CamilleR.png',
        description:
          'Camille dashes to target champion, anchoring them to the area. She also deals bonus magic damage to the target with her basic attacks.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0164/ability_0164_R1.webm',
      },
    ],
    splashPosition: '-859px -41px',
    lanes: ['Top'],
    releaseDate: '2016-12-07',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V6.24',
    attackRange: 125,
    region: 'Piltover',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 2,
      control: 2,
      mobility: 3,
      utility: 1,
      difficulty: 3,
      style: 40,
      damageBreakdown: {
        magic: 6.4,
        physical: 62.7,
        true_: 30.9,
      },
    },
    spotlightVideoID: 'YaNANTQH0zc',
    tagArrays: [
      [4, 26, 2, 32, 34, 67, 69],
      [],
      [53, 91, 99],
      [101],
      [78, 80, 83, 82, 91, 101],
      [78, 83, 82, 11, 102],
    ],
    ids: {
      kebab: 'camille',
      ddragon: 'Camille',
      cdragon: 164,
      wiki: 'Camille',
      universe: 'Camille',
    },
  },
  {
    name: 'Cassiopeia',
    title: "the Serpent's Embrace",
    roles: ['Mage'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Cassiopeia.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_0.jpg',
    abilities: [
      {
        name: 'Serpentine Grace',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Cassiopeia_Passive.png',
        description:
          'Cassiopeia gains Move Speed per level, but she cannot purchase Boots items.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0069/ability_0069_P1.webm',
      },
      {
        name: 'Noxious Blast',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/CassiopeiaQ.png',
        description:
          'Cassiopeia blasts an area with Poison after a brief delay, granting her increased Move Speed if she hits an enemy champion.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0069/ability_0069_Q1.webm',
      },
      {
        name: 'Miasma',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/CassiopeiaW.png',
        description:
          'Cassiopeia releases several clouds of poison, slowing, grounding, and lightly damaging enemies that pass through them. Grounded enemies cannot use Movement abilities.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0069/ability_0069_W1.webm',
      },
      {
        name: 'Twin Fang',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/CassiopeiaE.png',
        description:
          'Cassiopeia lets loose an attack that deals increased damage to Poisoned targets and heals her for a percentage of the damage dealt. If the target dies from this attack, Cassiopeia regains Mana.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0069/ability_0069_E1.webm',
      },
      {
        name: 'Petrifying Gaze',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/CassiopeiaR.png',
        description:
          'Cassiopeia releases a swirl of magical energy from her eyes, stunning any enemies in front of her that are facing her and slowing any others with their back turned.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0069/ability_0069_R1.webm',
      },
    ],
    splashPosition: '-621px -107px',
    lanes: ['Middle'],
    releaseDate: '2010-12-14',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V1.0.0.107',
    attackRange: 550,
    region: 'Noxus',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 3,
      mobility: 1,
      utility: 1,
      difficulty: 3,
      style: 100,
      damageBreakdown: {
        magic: 97,
        physical: 2.1,
        true_: 0.9,
      },
    },
    spotlightVideoID: 'neQNvEyuhPU',
    tagArrays: [
      [26, 2, 67, 68],
      [],
      [103],
      [19, 103],
      [95, 88, 102],
      [80, 101],
    ],
    ids: {
      kebab: 'cassiopeia',
      ddragon: 'Cassiopeia',
      cdragon: 69,
      wiki: 'Cassiopeia',
      universe: 'Cassiopeia',
    },
  },
  {
    name: "Cho'Gath",
    title: 'the Terror of the Void',
    roles: ['Tank', 'Mage'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Chogath.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_0.jpg',
    abilities: [
      {
        name: 'Carnivore',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/GreenTerror_TailSpike.png',
        description:
          "Whenever Cho'Gath kills a unit, he recovers Health and Mana. The values restored increase with Cho'Gath's level.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0031/ability_0031_P1.webm',
      },
      {
        name: 'Rupture',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/Rupture.png',
        description:
          'Ruptures the ground at target location, popping enemy units into the air, dealing damage and slowing them.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0031/ability_0031_Q1.webm',
      },
      {
        name: 'Feral Scream',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/FeralScream.png',
        description:
          "Cho'Gath unleashes a terrible scream at enemies in a cone, dealing magic damage and Silencing enemies for a few seconds.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0031/ability_0031_W1.webm',
      },
      {
        name: 'Vorpal Spikes',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/VorpalSpikes.png',
        description:
          "Cho'Gath's attacks release deadly spikes, dealing damage and slowing all enemy units in front of him.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0031/ability_0031_E1.webm',
      },
      {
        name: 'Feast',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/Feast.png',
        description:
          "Devours an enemy unit, dealing a high amount of true damage. If the target is killed, Cho'Gath grows, gaining maximum Health.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0031/ability_0031_R1.webm',
      },
    ],
    splashPosition: '-575px -119px',
    lanes: ['Top'],
    releaseDate: '2009-06-26',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V0.7.20.112',
    attackRange: 125,
    region: 'Void',
    species: 'Voidborn',
    ratings: {
      damage: 2,
      toughness: 3,
      control: 2,
      mobility: 1,
      utility: 1,
      difficulty: 1,
      style: 65,
      damageBreakdown: {
        magic: 67.5,
        physical: 13,
        true_: 19.5,
      },
    },
    spotlightVideoID: 'GJ8QI_7puvU',
    tagArrays: [
      [5, 26, 67, 69],
      [],
      [103],
      [22, 101],
      [53, 80, 99],
      [73, 70, 88, 102],
    ],
    ids: {
      kebab: 'cho-gath',
      ddragon: 'Chogath',
      cdragon: 31,
      wiki: "Cho'Gath",
      universe: 'Chogath',
    },
  },
  {
    name: 'Corki',
    title: 'the Daring Bombardier',
    roles: ['Marksman'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Corki.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_0.jpg',
    abilities: [
      {
        name: 'Hextech Munitions',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Corki_RapidReload.png',
        description:
          "A percentage of Corki's basic attack damage is converted into <magicDamage>magic damage</magicDamage>.<br><br>Corki can occasionally retrieve The Package inside his base, granting him movement speed and an empowered cast of Valkyrie.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0042/ability_0042_P1.webm',
      },
      {
        name: 'Phosphorus Bomb',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/PhosphorusBomb.png',
        description:
          'Corki fires a flash bomb at a target location, dealing magic damage to enemies in the area. This attack additionally reveals units in the area for a duration.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0042/ability_0042_Q1.webm',
      },
      {
        name: 'Valkyrie',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/CarpetBomb.png',
        description:
          'Corki flies a short distance, dropping bombs that create a trail of fire that damages opponents who remain in it.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0042/ability_0042_W1.webm',
      },
      {
        name: 'Gatling Gun',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/GGun.png',
        description:
          "Corki's gatling gun rapidly fires in a cone in front of him, dealing damage and reducing enemy Armor and Magic Resist.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0042/ability_0042_E1.webm',
      },
      {
        name: 'Missile Barrage',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/MissileBarrage.png',
        description:
          'Corki fires a missile toward his target location that explodes on impact, dealing damage to enemies in an area. Corki stores missiles over time, up to a maximum. Every 3rd missile fired will be a Big One, dealing extra damage.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0042/ability_0042_R1.webm',
      },
    ],
    splashPosition: '-681px -119px',
    lanes: ['Middle'],
    releaseDate: '2009-09-19',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V0.9.25.21',
    attackRange: 550,
    region: 'Bandle City',
    species: 'Yordle',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 1,
      mobility: 2,
      utility: 1,
      difficulty: 2,
      style: 45,
      damageBreakdown: {
        magic: 88.1,
        physical: 11,
        true_: 0.9,
      },
    },
    spotlightVideoID: 'ABYix52iBj0',
    tagArrays: [
      [26, 34, 67, 68],
      [52, 89],
      [103],
      [78, 83, 82, 3, 103],
      [101],
      [101],
    ],
    ids: {
      kebab: 'corki',
      ddragon: 'Corki',
      cdragon: 42,
      wiki: 'Corki',
      universe: 'Corki',
    },
  },
  {
    name: 'Darius',
    title: 'the Hand of Noxus',
    roles: ['Fighter', 'Tank'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Darius.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg',
    abilities: [
      {
        name: 'Hemorrhage',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Darius_Icon_Hemorrhage.png',
        description:
          "Darius' attacks and damaging abilities cause enemies to bleed for physical damage over 5 seconds, stacking up to 5 times. Darius enrages and gains massive Attack Damage when his target reaches max stacks.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0122/ability_0122_P1.webm',
      },
      {
        name: 'Decimate',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/DariusCleave.png',
        description:
          'Darius winds up and swings his axe in a wide circle. Enemies struck by the blade take more damage than those struck by the handle. Darius heals based on enemy champions and large monsters hit by the blade.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0122/ability_0122_Q1.webm',
      },
      {
        name: 'Crippling Strike',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/DariusNoxianTacticsONH.png',
        description:
          "Darius's next attack strikes an enemy's crucial artery. As they bleed out, their Move Speed is slowed.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0122/ability_0122_W1.webm',
      },
      {
        name: 'Apprehend',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/DariusAxeGrabCone.png',
        description:
          "Darius hones his axe, passively causing his physical damage to ignore a percentage of his target's Armor. When activated, Darius sweeps up his enemies with his axe's hook and pulls them to him.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0122/ability_0122_E1.webm',
      },
      {
        name: 'Noxian Guillotine',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/DariusExecute.png',
        description:
          'Darius leaps to an enemy champion and strikes a lethal blow, dealing true damage. This damage is increased for each stack of Hemorrhage on the target. If Noxian Guillotine is a killing blow, its cooldown is refreshed for a brief duration.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0122/ability_0122_R1.webm',
      },
    ],
    splashPosition: '-515px 0px',
    lanes: ['Top'],
    releaseDate: '2012-05-23',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V1.0.0.140',
    attackRange: 175,
    region: 'Noxus',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 2,
      control: 2,
      mobility: 1,
      utility: 1,
      difficulty: 2,
      style: 55,
      damageBreakdown: {
        magic: 1,
        physical: 80.8,
        true_: 18.2,
      },
    },
    spotlightVideoID: '0M15wr-5O18',
    tagArrays: [
      [1, 26, 67, 69],
      [54],
      [99],
      [53, 95, 88, 99],
      [80, 101],
      [78, 85, 13, 88, 94, 102],
    ],
    ids: {
      kebab: 'darius',
      ddragon: 'Darius',
      cdragon: 122,
      wiki: 'Darius',
      universe: 'Darius',
    },
  },
  {
    name: 'Diana',
    title: 'Scorn of the Moon',
    roles: ['Fighter', 'Mage'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Diana.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_0.jpg',
    abilities: [
      {
        name: 'Moonsilver Blade',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Diana_Passive_LunarBlade.png',
        description:
          'Every third strike cleaves nearby enemies for an additional magic damage. After casting a spell, Diana gains Attack Speed for her next 3 attacks.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0131/ability_0131_P1.webm',
      },
      {
        name: 'Crescent Strike',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/DianaQ.png',
        description:
          'Unleashes a bolt of lunar energy in an arc dealing magic damage.<br><br>Afflicts enemies struck with Moonlight, revealing them if they are not stealthed for 3 seconds.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0131/ability_0131_Q1.webm',
      },
      {
        name: 'Pale Cascade',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/DianaOrbs.png',
        description:
          'Diana creates three orbiting spheres that detonate on contact with enemies to deal damage in an area. She also gains a temporary shield that absorbs damage. If her third sphere detonates, the shield gains additional strength.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0131/ability_0131_W1.webm',
      },
      {
        name: 'Lunar Rush',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/DianaTeleport.png',
        description:
          'Becomes the living embodiment of the vengeful moon, dashing to an enemy and dealing magic damage.<br><br>Lunar Rush has no cooldown when used to dash to an enemy afflicted with Moonlight. All other enemies will have the Moonlight debuff removed regardless of whether they were the target of Lunar Rush.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0131/ability_0131_E1.webm',
      },
      {
        name: 'Moonfall',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/DianaR.png',
        description:
          'Diana reveals and draws in all nearby enemies and slows them.<br><br>If Diana pulls in one or more enemy champions, the moonlight crashes down onto her after a short delay, dealing magic damage in an area around her, increased for each target beyond the first pulled.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0131/ability_0131_R1.webm',
      },
    ],
    splashPosition: '-670p× -156px',
    lanes: ['Jungle'],
    releaseDate: '2012-08-07',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V1.0.0.144',
    attackRange: 150,
    region: 'Targon',
    species: 'Aspect Host',
    ratings: {
      damage: 3,
      toughness: 2,
      control: 2,
      mobility: 2,
      utility: 1,
      difficulty: 1,
      style: 65,
      damageBreakdown: {
        magic: 88.7,
        physical: 7.5,
        true_: 3.8,
      },
    },
    spotlightVideoID: 'H7WSLWcACiw',
    tagArrays: [[1, 26, 67, 69], [53], [103], [99], [78, 83, 82, 102], [99]],
    ids: {
      kebab: 'diana',
      ddragon: 'Diana',
      cdragon: 131,
      wiki: 'Diana',
      universe: 'Diana',
    },
  },
  {
    name: 'Dr. Mundo',
    title: 'the Madman of Zaun',
    roles: ['Fighter', 'Tank'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/DrMundo.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_0.jpg',
    abilities: [
      {
        name: 'Goes Where He Pleases',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/DrMundo_P.Dr_Mundo_VGU.png',
        description:
          "Dr. Mundo resists the first Immobilizing effect that hits him, instead losing Health and dropping a chemical cannister nearby. Dr. Mundo can pick it up by walking over it, restoring Health and reducing this Ability's Cooldown.<br><br>Dr. Mundo also has significantly increased Health regeneration.<br>",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0036/ability_0036_P1.webm',
      },
      {
        name: 'Infected Bonesaw',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/DrMundoQ.png',
        description:
          'Dr. Mundo throws an infected bonesaw, dealing damage to the first enemy hit based on their current health and slowing them.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0036/ability_0036_Q1.webm',
      },
      {
        name: 'Heart Zapper',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/DrMundoW.png',
        description:
          'Dr. Mundo electrocutes himself, dealing persistent damage to nearby enemies and storing a portion of damage he takes. At the end of the duration or on Recast, Dr. Mundo deals a burst of damage to nearby enemies. If the burst hit an enemy, he heals a percentage of the stored damage.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0036/ability_0036_W1.webm',
      },
      {
        name: 'Blunt Force Trauma',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/DrMundoE.png',
        description:
          'Passive - Dr. Mundo gains bonus Attack Damage, increasing based on his missing Health.<br><br>Active - Dr. Mundo slams his “medical” bag into an enemy, dealing additional damage based on his missing Health. If the enemy dies they are swatted away, dealing damage to enemies they pass through.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0036/ability_0036_E1.webm',
      },
      {
        name: 'Maximum Dosage',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/DrMundoR.png',
        description:
          'Dr. Mundo pumps himself with chemicals, instantly healing a percent of his missing Health. He then gains bonus Attack Damage and Move Speed, and regenerates a portion of his maximum Health over a long duration.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0036/ability_0036_R1.webm',
      },
    ],
    splashPosition: '-737px -105px',
    lanes: ['Top'],
    releaseDate: '2009-09-02',
    resource: 'Health',
    rangeType: 'Melee',
    releasePatch: 'V0.9.22.16',
    attackRange: 125,
    region: 'Zaun',
    species: 'Human',
    ratings: {
      damage: 2,
      toughness: 3,
      control: 1,
      mobility: 1,
      utility: 1,
      difficulty: 1,
      style: 55,
      damageBreakdown: {
        magic: 72.6,
        physical: 25.8,
        true_: 1.7,
      },
    },
    tagArrays: [[26, 35, 65, 69], [86], [101], [91, 99], [53, 88, 99], [99]],
    ids: {
      kebab: 'dr-mundo',
      ddragon: 'DrMundo',
      cdragon: 36,
      wiki: 'Dr._Mundo',
      universe: 'DrMundo',
    },
    spotlightVideoID: '1MOjmAsF3OM',
  },
  {
    name: 'Draven',
    title: 'the Glorious Executioner',
    roles: ['Marksman'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Draven.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_0.jpg',
    abilities: [
      {
        name: 'League of Draven',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Draven_passive.png',
        description:
          "Draven gains his fans' Adoration when he catches a Spinning Axe or kills a minion, monster, or tower. Killing enemy champions grants Draven bonus gold based on how much Adoration he has.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0119/ability_0119_P1.webm',
      },
      {
        name: 'Spinning Axe',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/DravenSpinning.png',
        description:
          "Draven's next attack will deal bonus physical damage. This axe will ricochet off the target high up into the air. If Draven catches it, he automatically readies another Spinning Axe. Draven can have two Spinning Axes at once.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0119/ability_0119_Q1.webm',
      },
      {
        name: 'Blood Rush',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/DravenFury.png',
        description:
          'Draven gains increased Movement Speed and Attack Speed. The Movement Speed bonus decreases rapidly over its duration. Catching a Spinning Axe will refresh the cooldown of Blood Rush.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0119/ability_0119_W1.webm',
      },
      {
        name: 'Stand Aside',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/DravenDoubleShot.png',
        description:
          'Draven throws his axes, dealing physical damage to targets hit and knocking them aside. Targets hit are slowed.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0119/ability_0119_E1.webm',
      },
      {
        name: 'Whirling Death',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/DravenRCast.png',
        description:
          "Draven hurls two massive axes to deal physical damage to each unit struck. Whirling Death slowly reverses direction and returns to Draven after striking an enemy champion. Draven may also activate this ability while the axes are in flight to cause it to return early. Deals less damage for each unit hit and resets when the axes reverse direction. Executes enemies who have less health than Draven's number of Adoration stacks.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0119/ability_0119_R1.webm',
      },
    ],
    splashPosition: '-494px -23px',
    lanes: ['Bottom'],
    releaseDate: '2012-06-06',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V1.0.0.140b',
    attackRange: 550,
    region: 'Noxus',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 1,
      mobility: 2,
      utility: 1,
      difficulty: 2,
      style: 10,
      damageBreakdown: {
        magic: 1,
        physical: 96.8,
        true_: 2.2,
      },
    },
    spotlightVideoID: 'h5zyGj4Z0Sg',
    tagArrays: [
      [26, 67, 68],
      [88, 96],
      [53, 99],
      [99],
      [80, 3, 101],
      [91, 87, 101],
    ],
    ids: {
      kebab: 'draven',
      ddragon: 'Draven',
      cdragon: 119,
      wiki: 'Draven',
      universe: 'Draven',
    },
  },
  {
    name: 'Ekko',
    title: 'the Boy Who Shattered Time',
    roles: ['Fighter', 'Assassin'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Ekko.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_0.jpg',
    abilities: [
      {
        name: 'Z-Drive Resonance',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Ekko_P.png',
        description:
          'Every third attack or damaging spell on the same target deals bonus magic damage, and grants Ekko a burst of speed if the target is a champion.<br><br>',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0245/ability_0245_P1.webm',
      },
      {
        name: 'Timewinder',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/EkkoQ.png',
        description:
          'Ekko throws a temporal grenade that expands into a time-distortion field upon hitting an enemy champion, slowing and damaging anyone caught inside. After a delay, the grenade rewinds back to Ekko, dealing damage on its return.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0245/ability_0245_Q1.webm',
      },
      {
        name: 'Parallel Convergence',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/EkkoW.png',
        description:
          "Ekko's basic attacks deal bonus magic damage to low health enemies. He can cast Parallel Convergence to split the timeline, creating an anomaly after a few seconds that slows enemies caught inside. If Ekko enters the anomaly, he gains shielding and stuns enemies by suspending them in time.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0245/ability_0245_W1.webm',
      },
      {
        name: 'Phase Dive',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/EkkoE.png',
        description:
          'Ekko rolls evasively while charging up his Z-Drive. His next attack deals bonus damage and warps reality, teleporting him to his target.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0245/ability_0245_E1.webm',
      },
      {
        name: 'Chronobreak',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/EkkoR.png',
        description:
          'Ekko shatters his timeline, becoming untargetable and rewinding to a more favorable point in time. He returns to whenever he was a few seconds ago, and heals for a percentage of the damage received in that duration. Enemies near his arrival zone take massive damage.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0245/ability_0245_R1.webm',
      },
    ],
    splashPosition: '-747px -59px',
    lanes: ['Jungle', 'Middle'],
    releaseDate: '2015-05-29',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V5.10',
    attackRange: 125,
    region: 'Zaun',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 2,
      control: 2,
      mobility: 3,
      utility: 1,
      difficulty: 3,
      style: 75,
      damageBreakdown: {
        magic: 86.4,
        physical: 11.7,
        true_: 1.9,
      },
    },
    spotlightVideoID: 'Cx-9Oi2xstA',
    tagArrays: [
      [26, 2, 67, 69],
      [53],
      [101],
      [80, 103],
      [78, 81, 83, 82, 101],
      [81, 28, 99],
    ],
    ids: {
      kebab: 'ekko',
      ddragon: 'Ekko',
      cdragon: 245,
      wiki: 'Ekko',
      universe: 'Ekko',
    },
  },
  {
    name: 'Elise',
    title: 'the Spider Queen',
    roles: ['Fighter', 'Mage'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Elise.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Elise_0.jpg',
    abilities: [
      {
        name: 'Spider Queen',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/ElisePassive.png',
        description:
          "Human Form: When Elise's abilities hit an enemy, she gains a dormant Spiderling.<br><br>Spider Form: Basic attacks deal bonus magic damage and restore health to Elise.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0060/ability_0060_P1.webm',
      },
      {
        name: 'Neurotoxin / Venomous Bite',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/EliseHumanQ.png',
        description:
          "Human Form: Deals damage based upon how high the target's Health is.<br><br>Spider Form: Lunges at an enemy and deals damage based upon how low their Health is.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0060/ability_0060_Q1.webm',
      },
      {
        name: 'Volatile Spiderling / Skittering Frenzy',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/EliseHumanW.png',
        description:
          'Human Form: Releases a venom-gorged Spiderling that explodes when it nears a target.<br><br>Spider Form: Elise and her Spiderlings gain Attack Speed.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0060/ability_0060_W1.webm',
      },
      {
        name: 'Cocoon / Rappel',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/EliseHumanE.png',
        description:
          "Human Form: Stuns the first enemy unit hit and reveals them if they are not stealthed.<br><br>Spider Form: Elise and her Spiderlings ascend into the air and then descend upon target enemy. After descending on an enemy target, Elise's bonus damage and healing from Spider Queen is increased.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0060/ability_0060_E1.webm',
      },
      {
        name: 'Spider Form',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/EliseR.png',
        description:
          'Transforms into a menacing spider, reducing her attack range in exchange for movement speed, new abilities, and a Spiderling swarm that will attack her foes.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0060/ability_0060_R1.webm',
      },
    ],
    splashPosition: '-708px -28px',
    lanes: ['Jungle'],
    releaseDate: '2012-10-26',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V1.0.0.150',
    attackRange: 550,
    region: 'Shadow Isles',
    species: 'Human',
    ratings: {
      damage: 2,
      toughness: 2,
      control: 2,
      mobility: 2,
      utility: 1,
      difficulty: 2,
      style: 65,
      damageBreakdown: {
        magic: 86.9,
        physical: 5.9,
        true_: 7.3,
      },
    },
    spotlightVideoID: 'mOz4uDKs2dM',
    tagArrays: [[2, 32, 67, 68, 71], [], [78, 84, 82], [], [78, 80, 81], [99]],
    ids: {
      kebab: 'elise',
      ddragon: 'Elise',
      cdragon: 60,
      wiki: 'Elise',
      universe: 'Elise',
    },
  },
  {
    name: 'Evelynn',
    title: "Agony's Embrace",
    roles: ['Assassin', 'Mage'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Evelynn.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_0.jpg',
    abilities: [
      {
        name: 'Demon Shade',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Evelynn_Passive.png',
        description:
          'When out of combat, Evelynn enters Demon Shade. Demon Shade heals Evelynn when she is low on health and grants Camouflage after level 6.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0028/ability_0028_P1.webm',
      },
      {
        name: 'Hate Spike',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/EvelynnQ.png',
        description:
          'Evelynn strikes out with her Lasher, dealing damage to the first unit hit. Then, Evelynn can shoot a line of spikes at nearby foes up to 3 times.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0028/ability_0028_Q1.webm',
      },
      {
        name: 'Allure',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/EvelynnW.png',
        description:
          'Evelynn curses her target, causing her next attack or spell after a delay to charm her target and reduce their magic resist.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0028/ability_0028_W1.webm',
      },
      {
        name: 'Whiplash',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/EvelynnE.png',
        description:
          'Evelynn whips her target with her Lasher, dealing damage. She then gains movement speed for a short duration.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0028/ability_0028_E1.webm',
      },
      {
        name: 'Last Caress',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/EvelynnR.png',
        description:
          'Evelynn briefly goes untargetable and decimates the area in front of her before warping backwards a long distance.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0028/ability_0028_R1.webm',
      },
    ],
    splashPosition: '-486px -68px',
    lanes: ['Jungle'],
    releaseDate: '2009-05-01',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V0.7.20.104',
    attackRange: 125,
    region: 'Runeterra',
    species: 'Demon',
    ratings: {
      damage: 2,
      toughness: 2,
      control: 1,
      mobility: 2,
      utility: 2,
      difficulty: 2,
      style: 75,
      damageBreakdown: {
        magic: 91.9,
        physical: 2.1,
        true_: 6,
      },
    },
    spotlightVideoID: 'ep_U4U6YW4E',
    tagArrays: [
      [26, 32, 67, 69],
      [],
      [53, 100, 101],
      [80, 12, 102],
      [102],
      [101],
    ],
    ids: {
      kebab: 'evelynn',
      ddragon: 'Evelynn',
      cdragon: 28,
      wiki: 'Evelynn',
      universe: 'Evelynn',
    },
  },
  {
    name: 'Ezreal',
    title: 'the Prodigal Explorer',
    roles: ['Mage', 'Marksman'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Ezreal.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_0.jpg',
    abilities: [
      {
        name: 'Rising Spell Force',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Ezreal_RisingSpellForce.png',
        description:
          'Ezreal gains increasing Attack Speed each time he successfully hits a spell, stacking up to 5 times.',
        video: '',
      },
      {
        name: 'Mystic Shot',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/EzrealQ.png',
        description:
          'Ezreal fires a damaging bolt of energy which reduces all of his cooldowns slightly if it strikes an enemy unit.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0081/ability_0081_Q1.webm',
      },
      {
        name: 'Essence Flux',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/EzrealW.png',
        description:
          'Ezreal fires an orb that sticks to the first champion or objective hit. If Ezreal hits an enemy with the orb, it detonates and deals damage.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0081/ability_0081_W1.webm',
      },
      {
        name: 'Arcane Shift',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/EzrealE.png',
        description:
          'Ezreal teleports to a target nearby location and fires a homing bolt which strikes the nearest enemy unit. Prioritizes enemies stuck with Essence Flux.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0081/ability_0081_E1.webm',
      },
      {
        name: 'Trueshot Barrage',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/EzrealR.png',
        description:
          'Ezreal winds up before firing a powerful barrage of energy that deals massive damage to each unit it passes through (damage is reduced for minions and non-epic monsters).',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0081/ability_0081_R1.webm',
      },
    ],
    splashPosition: '-572px -117px',
    lanes: ['Bottom'],
    releaseDate: '2010-03-16',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V1.0.0.79',
    attackRange: 550,
    region: 'Piltover',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 1,
      mobility: 3,
      utility: 1,
      difficulty: 1,
      style: 45,
      damageBreakdown: {
        magic: 31.4,
        physical: 66.2,
        true_: 2.4,
      },
    },
    spotlightVideoID: '3EElFyFcaEk',
    tagArrays: [[67, 68], [], [101], [95, 101], [81, 100, 101], [87, 89, 101]],
    ids: {
      kebab: 'ezreal',
      ddragon: 'Ezreal',
      cdragon: 81,
      wiki: 'Ezreal',
      universe: 'Ezreal',
    },
  },
  {
    name: 'Fiddlesticks',
    title: 'the Ancient Fear',
    roles: ['Mage', 'Support'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Fiddlesticks.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiddlesticks_0.jpg',
    abilities: [
      {
        name: 'A Harmless Scarecrow',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/FiddleSticks_Passive.png',
        description: "Fiddlesticks' trinket is replaced by scarecrow effigies.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0009/ability_0009_P1.webm',
      },
      {
        name: 'Terrify',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/FiddleSticksQ.png',
        description:
          "Fiddlesticks damaging enemies with spells while unseen or targeting an enemy with Terrify's activation strikes a target unit with fear, causing it to flee in terror for a duration.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0009/ability_0009_Q1.webm',
      },
      {
        name: 'Bountiful Harvest',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/FiddleSticksW.png',
        description:
          'Fiddlesticks drains health from nearby enemies, dealing bonus execute damage at the end of the duration.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0009/ability_0009_W1.webm',
      },
      {
        name: 'Reap',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/FiddleSticksE.png',
        description:
          'Fiddlesticks slashes an area with its scythe, slowing all enemies hit and silencing enemies hit in the center of the slash.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0009/ability_0009_E1.webm',
      },
      {
        name: 'Crowstorm',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/FiddleSticksR.png',
        description:
          'A murder of crows flock wildly around Fiddlesticks, dealing damage per second to all enemy units in the area.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0009/ability_0009_R1.webm',
      },
    ],
    splashPosition: '-511px -117px',
    lanes: ['Jungle'],
    releaseDate: '2009-02-21',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V0.1.0.2',
    attackRange: 480,
    region: 'Runeterra',
    species: 'Demon',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 3,
      mobility: 1,
      utility: 1,
      difficulty: 2,
      style: 100,
      damageBreakdown: {
        magic: 93.4,
        physical: 0.8,
        true_: 5.9,
      },
    },
    spotlightVideoID: 'uc_-ms5ADhk',
    tagArrays: [
      [26, 67, 68],
      [80],
      [13, 102],
      [89, 100],
      [22, 103],
      [78, 79, 81, 89, 103],
    ],
    ids: {
      kebab: 'fiddlesticks',
      ddragon: 'Fiddlesticks',
      cdragon: 9,
      wiki: 'Fiddlesticks',
      universe: 'Fiddlesticks',
    },
  },
  {
    name: 'Fiora',
    title: 'the Grand Duelist',
    roles: ['Fighter', 'Assassin'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Fiora.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiora_0.jpg',
    abilities: [
      {
        name: "Duelist's Dance",
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Fiora_P.png',
        description:
          'Fiora challenges nearby enemy Champions to dodge her. She calls out a direction from which she will try to strike. If she can complete her own challenge, she receives a small bonus and calls out a new direction.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0114/ability_0114_P1.webm',
      },
      {
        name: 'Lunge',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/FioraQ.png',
        description:
          'Fiora lunges in a direction and stabs a nearby enemy, dealing physical damage and applying on-hit effects.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0114/ability_0114_Q1.webm',
      },
      {
        name: 'Riposte',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/FioraW.png',
        description:
          'Fiora parries all incoming damage and disables for a short time, then stabs in a direction. This stab slows the first enemy champion hit, or stuns them if Fiora blocked an immobilizing effect with this ability.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0114/ability_0114_W1.webm',
      },
      {
        name: 'Bladework',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/FioraE.png',
        description:
          'Fiora has increased attack speed for the next two attacks. The first attack slows the target, and the second attack will critically strike.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0114/ability_0114_E1.webm',
      },
      {
        name: 'Grand Challenge',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/FioraR.png',
        description:
          'Fiora reveals all four Vitals on an enemy champion and gains movement speed while near them. If Fiora hits all 4 Vitals or if the target dies after she has hit at least one, Fiora and her allies in the area are healed over the next few seconds.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0114/ability_0114_R1.webm',
      },
    ],
    splashPosition: '-603px -10px',
    lanes: ['Top'],
    releaseDate: '2012-02-29',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V1.0.0.135',
    attackRange: 150,
    region: 'Demacia',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 2,
      control: 2,
      mobility: 2,
      utility: 2,
      difficulty: 2,
      style: 20,
      damageBreakdown: {
        magic: 6.1,
        physical: 61.5,
        true_: 32.4,
      },
    },
    spotlightVideoID: 'YRyGvsGbHnM',
    tagArrays: [
      [26, 2, 31, 33, 38, 67, 69],
      [53],
      [78, 83, 82, 101],
      [86, 9, 89, 101],
      [53, 99],
      [102],
    ],
    ids: {
      kebab: 'fiora',
      ddragon: 'Fiora',
      cdragon: 114,
      wiki: 'Fiora',
      universe: 'Fiora',
    },
  },
  {
    name: 'Fizz',
    title: 'the Tidal Trickster',
    roles: ['Fighter', 'Assassin'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Fizz.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fizz_0.jpg',
    abilities: [
      {
        name: 'Nimble Fighter',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Fizz_P.png',
        description:
          'Fizz can move through units and takes a flat amount of reduced damage from all sources',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0105/ability_0105_P1.webm',
      },
      {
        name: 'Urchin Strike',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/FizzQ.png',
        description:
          'Fizz dashes through his target, dealing magic damage and applying on hit effects.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0105/ability_0105_Q1.webm',
      },
      {
        name: 'Seastone Trident',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/FizzW.png',
        description:
          "Fizz's attacks bleed his enemies, dealing magic damage over several seconds. Fizz can empower his next attack to deal bonus damage and empower his further attacks for a short time.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0105/ability_0105_W1.webm',
      },
      {
        name: 'Playful / Trickster',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/FizzE.png',
        description:
          'Fizz hops into the air, landing gracefully upon his spear and becoming untargetable. From this position, Fizz can either slam the ground or choose to jump again before smashing back down.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0105/ability_0105_E1.webm',
      },
      {
        name: 'Chum the Waters',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/FizzR.png',
        description:
          'Fizz tosses a fish in a direction that attaches to any champion that touches it, slowing the target. After a short delay, a shark erupts from the ground, knocking up the target and knocking any nearby enemies aside. All enemies hit are dealt magic damage and slowed.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0105/ability_0105_R1.webm',
      },
    ],
    splashPosition: '-822px -66px',
    lanes: ['Middle'],
    releaseDate: '2011-11-15',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V1.0.0.129',
    attackRange: 175,
    region: 'Bilgewater',
    species: 'Yordle',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 2,
      mobility: 3,
      utility: 1,
      difficulty: 2,
      style: 90,
      damageBreakdown: {
        magic: 79.6,
        physical: 16.3,
        true_: 4.1,
      },
    },
    spotlightVideoID: 'ATbmKP9RoXI',
    tagArrays: [
      [4, 5, 26, 32, 67, 69],
      [],
      [78, 83, 82, 102],
      [53, 54, 95, 88, 94, 99],
      [78, 83, 82, 91, 101],
      [80, 101],
    ],
    ids: {
      kebab: 'fizz',
      ddragon: 'Fizz',
      cdragon: 105,
      wiki: 'Fizz',
      universe: 'Fizz',
    },
  },
  {
    name: 'Galio',
    title: 'the Colossus',
    roles: ['Tank', 'Mage'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Galio.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Galio_0.jpg',
    abilities: [
      {
        name: 'Colossal Smash',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Galio_Passive.png',
        description:
          "Every few seconds, Galio's next basic attack deals bonus magic damage in an area.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0003/ability_0003_P1.webm',
      },
      {
        name: 'Winds of War',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/GalioQ.png',
        description:
          'Galio fires two windblasts that converge into a large tornado that deals damage over time.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0003/ability_0003_Q1.webm',
      },
      {
        name: 'Shield of Durand',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/GalioW.png',
        description:
          'Galio charges a defensive stance, moving slowly. Upon releasing the charge, Galio will taunt and damage nearby enemies.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0003/ability_0003_W1.webm',
      },
      {
        name: 'Justice Punch',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/GalioE.png',
        description:
          'Galio will briefly step back and charge, knocking up the first enemy champion he encounters.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0003/ability_0003_E1.webm',
      },
      {
        name: "Hero's Entrance",
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/GalioR.png',
        description:
          "Galio designates an ally's position as his landing spot, granting all allies in the area a magic shield. After a delay Galio smashes down location, knocking up nearby enemies.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0003/ability_0003_R1.webm',
      },
    ],
    splashPosition: '-446px -3px',
    lanes: ['Middle'],
    releaseDate: '2010-08-10',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V1.0.0.98',
    attackRange: 150,
    region: 'Demacia',
    species: 'Golem',
    ratings: {
      damage: 2,
      toughness: 3,
      control: 3,
      mobility: 2,
      utility: 1,
      difficulty: 2,
      style: 100,
      damageBreakdown: {
        magic: 95.1,
        physical: 1.3,
        true_: 3.6,
      },
    },
    spotlightVideoID: 't3BFQMW2Lfw',
    tagArrays: [
      [5, 26, 32, 33, 67, 69],
      [56],
      [101],
      [80, 14, 90, 99],
      [78, 85, 84, 82, 101],
      [78, 79, 80, 81, 89, 97, 102],
    ],
    ids: {
      kebab: 'galio',
      ddragon: 'Galio',
      cdragon: 3,
      wiki: 'Galio',
      universe: 'Galio',
    },
  },
  {
    name: 'Gangplank',
    title: 'the Saltwater Scourge',
    roles: ['Fighter'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Gangplank.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gangplank_0.jpg',
    abilities: [
      {
        name: 'Trial by Fire',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Gangplank_Passive.png',
        description:
          "Every few seconds, Gangplank's melee strike will set his opponent on fire.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0041/ability_0041_P1.webm',
      },
      {
        name: 'Parrrley',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/GangplankQWrapper.png',
        description:
          'Shoots target, plundering Gold for each enemy unit killed.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0041/ability_0041_Q1.webm',
      },
      {
        name: 'Remove Scurvy',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/GangplankW.png',
        description:
          'Eats citrus to cure crowd control effects and restore Health.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0041/ability_0041_W1.webm',
      },
      {
        name: 'Powder Keg',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/GangplankE.png',
        description:
          "Gangplank uncovers a powder keg at target location. If he attacks it, it explodes, spreading the attack's damage to enemies in the area, slowing them.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0041/ability_0041_E1.webm',
      },
      {
        name: 'Cannon Barrage',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/GangplankR.png',
        description:
          'Gangplank signals his ship to bombard an area, slowing and damaging enemies.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0041/ability_0041_R1.webm',
      },
    ],
    splashPosition: '-704px -95px',
    lanes: ['Top'],
    releaseDate: '2009-08-19',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V0.9.22.15',
    attackRange: 125,
    region: 'Bilgewater',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 1,
      mobility: 1,
      utility: 2,
      difficulty: 3,
      style: 75,
      damageBreakdown: {
        magic: 27.2,
        physical: 62.4,
        true_: 10.4,
      },
    },
    spotlightVideoID: '3kysDbC-NTo',
    tagArrays: [
      [26, 39, 67, 69],
      [54],
      [88, 96, 102],
      [99],
      [105, 103],
      [76, 74, 87, 103],
    ],
    ids: {
      kebab: 'gangplank',
      ddragon: 'Gangplank',
      cdragon: 41,
      wiki: 'Gangplank',
      universe: 'Gangplank',
    },
  },
  {
    name: 'Garen',
    title: 'The Might of Demacia',
    roles: ['Fighter', 'Tank'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Garen.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg',
    abilities: [
      {
        name: 'Perseverance',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Garen_Passive.png',
        description:
          'If Garen has not recently been struck by damage or enemy abilities, he regenerates a percentage of his total health each second.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0086/ability_0086_P1.webm',
      },
      {
        name: 'Decisive Strike',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/GarenQ.png',
        description:
          'Garen gains a burst of Move Speed, breaking free of all slows affecting him. His next attack strikes a vital area of his foe, dealing bonus damage and silencing them.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0086/ability_0086_Q1.webm',
      },
      {
        name: 'Courage',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/GarenW.png',
        description:
          'Garen passively increases his armor and magic resist by killing enemies. He may also activate this ability to give him a shield and tenacity for a brief moment followed by a lesser amount of damage reduction for a longer duration.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0086/ability_0086_W1.webm',
      },
      {
        name: 'Judgment',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/GarenE.png',
        description:
          'Garen rapidly spins his sword around his body, dealing physical damage to nearby enemies.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0086/ability_0086_E1.webm',
      },
      {
        name: 'Demacian Justice',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/GarenR.png',
        description:
          'Garen calls upon the might of Demacia to attempt to execute an enemy champion.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0086/ability_0086_R1.webm',
      },
    ],
    splashPosition: '-790px -148px',
    lanes: ['Top'],
    releaseDate: '2010-04-27',
    resource: 'None',
    rangeType: 'Melee',
    releasePatch: 'V1.0.0.83',
    attackRange: 175,
    region: 'Demacia',
    species: 'Human',
    ratings: {
      damage: 2,
      toughness: 3,
      control: 1,
      mobility: 1,
      utility: 1,
      difficulty: 1,
      style: 75,
      damageBreakdown: {
        magic: 2,
        physical: 73.9,
        true_: 24.1,
      },
    },
    spotlightVideoID: 'Q7oyW6LjxrA',
    tagArrays: [[39, 62, 69], [], [53, 85, 22, 99], [99], [99], [102]],
    ids: {
      kebab: 'garen',
      ddragon: 'Garen',
      cdragon: 86,
      wiki: 'Garen',
      universe: 'Garen',
    },
  },
  {
    name: 'Gnar',
    title: 'the Missing Link',
    roles: ['Fighter', 'Tank'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Gnar.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gnar_0.jpg',
    abilities: [
      {
        name: 'Rage Gene',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Gnar_Passive.png',
        description:
          'While in combat Gnar generates Rage. At maximum Rage his next ability will transform him into Mega Gnar, granting increased survivability and access to new spells.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0150/ability_0150_P1.webm',
      },
      {
        name: 'Boomerang Throw / Boulder Toss',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/GnarQ.png',
        description:
          'Gnar throws a boomerang that damages and slows enemies it hits before returning to him. If he catches the boomerang its cooldown is reduced.<br><br>Mega Gnar instead throws a boulder that stops on the first unit hit, damaging and slowing everything nearby. It can then be picked up to reduce the cooldown.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0150/ability_0150_Q1.webm',
      },
      {
        name: 'Hyper / Wallop',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/GnarW.png',
        description:
          "Gnar's attacks and spells hype him up, dealing bonus damage and granting him Movement Speed.<br><br>Mega Gnar is too enraged to be hyper and instead can rear up on his hind legs and smash down on the area in front of him, stunning enemies in an area.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0150/ability_0150_W1.webm',
      },
      {
        name: 'Hop / Crunch',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/GnarE.png',
        description:
          'Gnar leaps to a location and bounces off the head of any unit he lands on, traveling further.<br><br>Mega Gnar is too large to bounce and instead lands with earth-shattering force, dealing damage in an area around him.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0150/ability_0150_E1.webm',
      },
      {
        name: 'GNAR!',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/GnarR.png',
        description:
          'Mega Gnar throws everything around him in a chosen direction, dealing damage and slowing them.  Any enemy that hits a wall is stunned and takes bonus damage.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0150/ability_0150_R1.webm',
      },
    ],
    splashPosition: '-729px -253px',
    lanes: ['Top'],
    releaseDate: '2014-08-14',
    resource: 'Rage',
    rangeType: 'Ranged',
    releasePatch: 'V4.14',
    attackRange: 175,
    region: 'Freljord',
    species: 'Yordle',
    ratings: {
      damage: 2,
      toughness: 1,
      control: 1,
      mobility: 2,
      utility: 1,
      difficulty: 2,
      style: 45,
      damageBreakdown: {
        magic: 16.3,
        physical: 83,
        true_: 0.7,
      },
    },
    spotlightVideoID: '4Qu3rhWGq0s',
    tagArrays: [
      [4, 26, 2, 64, 68, 71],
      [70],
      [101],
      [53, 80, 98],
      [78, 83, 82, 103],
      [80, 101],
    ],
    ids: {
      kebab: 'gnar',
      ddragon: 'Gnar',
      cdragon: 150,
      wiki: 'Gnar',
      universe: 'Gnar',
    },
  },
  {
    name: 'Gragas',
    title: 'the Rabble Rouser',
    roles: ['Fighter', 'Mage'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Gragas.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gragas_0.jpg',
    abilities: [
      {
        name: 'Happy Hour',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/GragasPassiveHeal.png',
        description: 'Gragas periodically heals upon using a skill.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0079/ability_0079_P1.webm',
      },
      {
        name: 'Barrel Roll',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/GragasQ.png',
        description:
          'Gragas rolls his cask to a location, which can be activated to explode or will explode on its own after 4 seconds. The potency of the explosion increases over time. Enemies struck by the blast have their Move Speed slowed.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0079/ability_0079_Q1.webm',
      },
      {
        name: 'Drunken Rage',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/GragasW.png',
        description:
          'Gragas guzzles down brew from his cask for 1 second. After finishing, he becomes drunkenly empowered, dealing magic damage to all nearby enemies on his next basic attack and reducing damage received.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0079/ability_0079_W1.webm',
      },
      {
        name: 'Body Slam',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/GragasE.png',
        description:
          'Gragas charges to a location and collides with the first enemy unit he comes across, dealing damage to all nearby enemy units and stunning them.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0079/ability_0079_E1.webm',
      },
      {
        name: 'Explosive Cask',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/GragasR.png',
        description:
          'Gragas hurls his cask to a location, dealing damage and knocking back enemies caught in the blast radius.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0079/ability_0079_R1.webm',
      },
    ],
    splashPosition: '-540px -63px',
    lanes: ['Top'],
    releaseDate: '2010-02-02',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V1.0.0.72',
    attackRange: 125,
    region: 'Freljord',
    species: 'Human',
    ratings: {
      damage: 2,
      toughness: 3,
      control: 3,
      mobility: 2,
      utility: 1,
      difficulty: 2,
      style: 90,
      damageBreakdown: {
        magic: 87.8,
        physical: 9.2,
        true_: 3,
      },
    },
    tagArrays: [
      [4, 26, 2, 67, 69],
      [],
      [91, 103],
      [53, 89, 99],
      [78, 80, 83, 82, 101],
      [80, 103],
    ],
    ids: {
      kebab: 'gragas',
      ddragon: 'Gragas',
      cdragon: 79,
      wiki: 'Gragas',
      universe: 'Gragas',
    },
    spotlightVideoID: 'G9uXVi2DnZA',
  },
  {
    name: 'Graves',
    title: 'the Outlaw',
    roles: ['Marksman'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Graves.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Graves_0.jpg',
    abilities: [
      {
        name: 'New Destiny',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/GravesTrueGrit.png',
        description:
          "Graves' shotgun has some unique properties. He must reload when he runs out of ammo. Attacks fire 4 bullets, which cannot pass through units. Non-champions struck by multiple bullets are knocked back.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0104/ability_0104_P1.webm',
      },
      {
        name: 'End of the Line',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/GravesQLineSpell.png',
        description:
          'Graves fires an explosive shell that detonates after 2 seconds, or 0.2 seconds if it strikes terrain.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0104/ability_0104_Q1.webm',
      },
      {
        name: 'Smoke Screen',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/GravesSmokeGrenade.png',
        description:
          'Graves fires a smoke canister at the target area creating a cloud of smoke that reduces sight range. Enemies caught in the initial impact are dealt magic damage and have their movement speed reduced briefly.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0104/ability_0104_W1.webm',
      },
      {
        name: 'Quickdraw',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/GravesMove.png',
        description:
          'Graves dashes forward gaining an Armor boost for several seconds. If Graves dashes towards an enemy champion, gain two stacks of True Grit instead. Hitting enemies with basic attacks lowers the cooldown of this skill and refreshes the resistance boost.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0104/ability_0104_E1.webm',
      },
      {
        name: 'Collateral Damage',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/GravesChargeShot.png',
        description:
          'Graves fires an explosive shell dealing heavy damage to the first champion it hits. After hitting a champion or reaching the end of its range, the shell explodes dealing damage in a cone.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0104/ability_0104_R1.webm',
      },
    ],
    splashPosition: '-733px -1px',
    lanes: ['Jungle'],
    releaseDate: '2011-10-19',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V1.0.0.127',
    attackRange: 425,
    region: 'Bilgewater',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 2,
      control: 1,
      mobility: 2,
      utility: 2,
      difficulty: 2,
      style: 20,
      damageBreakdown: {
        magic: 8.5,
        physical: 85.1,
        true_: 6.4,
      },
    },
    spotlightVideoID: 'BWzyB4xe7Y8',
    tagArrays: [
      [4, 26, 67, 68],
      [104],
      [101],
      [21, 103],
      [78, 83, 82, 101],
      [83, 82, 101],
    ],
    ids: {
      kebab: 'graves',
      ddragon: 'Graves',
      cdragon: 104,
      wiki: 'Graves',
      universe: 'Graves',
    },
  },
  {
    name: 'Gwen',
    title: 'The Hallowed Seamstress',
    roles: ['Fighter', 'Assassin'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Gwen.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gwen_0.jpg',
    abilities: [
      {
        name: 'A Thousand Cuts',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Gwen_Passive.Gwen.png',
        description:
          "Gwen's attacks deal bonus magic damage based on the targets health. She heals for a portion of the damage dealt to champions by this effect. ",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0887/ability_0887_P1.webm',
      },
      {
        name: 'Snip Snip!',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/GwenQ.png',
        description:
          'Gwen snips her scissors in a cone up to 6 times dealing magic damage. Gwen deals true damage to units in the center and applies her passive to them on each snip.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0887/ability_0887_Q1.webm',
      },
      {
        name: 'Hallowed Mist',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/GwenW.png',
        description:
          'Gwen summons mist that protects her from enemies outside of it. She can only be targeted by enemies who enter the mist.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0887/ability_0887_W1.webm',
      },
      {
        name: "Skip 'n Slash",
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/GwenE.png',
        description:
          "Gwen dashes a short distance then gains Attack Speed, attack range, and magic damage <OnHit>On-Hit</OnHit> for a few seconds. If she hits an enemy during that time, this Ability's cooldown is partially refunded. ",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0887/ability_0887_E1.webm',
      },
      {
        name: 'Needlework',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/GwenR.png',
        description:
          'Gwen hurls a needle that slows enemies hit, deals magic damage, and applies A Thousand Cuts to champions hit. <br><br>This ability can be cast up to two more times, with each cast throwing additional needles and dealing more damage. Gwen must hit an enemy between each cast to unlock the next one. ',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0887/ability_0887_R1.webm',
      },
    ],
    splashPosition: '-453px -1px',
    lanes: ['Top'],
    releaseDate: '2021-04-15',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V11.8',
    attackRange: 150,
    region: 'Shadow Isles',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 2,
      control: 1,
      mobility: 3,
      utility: 1,
      difficulty: 2,
      style: 50,
      damageBreakdown: {
        magic: 56.8,
        physical: 14.5,
        true_: 28.8,
      },
    },
    spotlightVideoID: 'pK4VLNk7uBc',
    tagArrays: [
      [26, 32, 67, 69],
      [53],
      [101],
      [99],
      [53, 78, 83, 82, 103],
      [80, 91, 101],
    ],
    ids: {
      kebab: 'gwen',
      ddragon: 'Gwen',
      cdragon: 887,
      wiki: 'Gwen',
      universe: 'Gwen',
    },
  },
  {
    name: 'Hecarim',
    title: 'the Shadow of War',
    roles: ['Fighter', 'Tank'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Hecarim.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Hecarim_0.jpg',
    abilities: [
      {
        name: 'Warpath',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Hecarim_Passive.png',
        description:
          'Hecarim gains Attack Damage equal to a percentage of his bonus Movement Speed.',
        video: '',
      },
      {
        name: 'Rampage',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/HecarimRapidSlash.png',
        description:
          'Hecarim cleaves nearby enemies dealing physical damage. If Hecarim damages at least one enemy, he increases the damage and lowers the cooldown of subsequent Rampages.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0120/ability_0120_Q1.webm',
      },
      {
        name: 'Spirit of Dread',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/HecarimW.png',
        description:
          'Hecarim deals magic damage to nearby enemies for a short duration. Hecarim gains Health equal to a percentage of any damage those enemies suffer.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0120/ability_0120_W1.webm',
      },
      {
        name: 'Devastating Charge',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/HecarimRamp.png',
        description:
          'Hecarim gains increasing Move Speed and can move through units for a short duration. His next attack knocks the target back and deals additional physical damage based on the distance he has traveled since activating the ability.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0120/ability_0120_E1.webm',
      },
      {
        name: 'Onslaught of Shadows',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/HecarimUlt.png',
        description:
          'Hecarim summons spectral riders and charges forward, dealing magic damage in a line. Hecarim creates a shockwave when he finishes his charge, causing nearby enemies to flee in terror.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0120/ability_0120_R1.webm',
      },
    ],
    splashPosition: '-758px -1px',
    lanes: ['Jungle'],
    releaseDate: '2012-04-18',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V1.0.0.138',
    attackRange: 175,
    region: 'Shadow Isles',
    species: 'Wraith',
    ratings: {
      damage: 2,
      toughness: 2,
      control: 2,
      mobility: 2,
      utility: 1,
      difficulty: 2,
      style: 65,
      damageBreakdown: {
        magic: 23,
        physical: 69.2,
        true_: 7.7,
      },
    },
    spotlightVideoID: '6DVGJm-u6To',
    tagArrays: [
      [4, 26, 2, 34, 67, 69],
      [],
      [99],
      [99],
      [52, 80, 83, 82, 99],
      [78, 79, 80, 83, 82, 13, 103],
    ],
    ids: {
      kebab: 'hecarim',
      ddragon: 'Hecarim',
      cdragon: 120,
      wiki: 'Hecarim',
      universe: 'Hecarim',
    },
  },
  {
    name: 'Heimerdinger',
    title: 'the Revered Inventor',
    roles: ['Mage', 'Support'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Heimerdinger.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Heimerdinger_0.jpg',
    abilities: [
      {
        name: 'Hextech Affinity',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Heimerdinger_Passive.png',
        description:
          'Gain Movement Speed while near allied towers and turrets deployed by Heimerdinger.',
        video: '',
      },
      {
        name: 'H-28 G Evolution Turret',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/HeimerdingerQ.png',
        description:
          'Heimerdinger lays down a rapid-fire cannon turret equipped with a secondary pass-through beam attack (turrets deal half damage to towers).',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0074/ability_0074_Q1.webm',
      },
      {
        name: 'Hextech Micro-Rockets',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/HeimerdingerW.png',
        description:
          'Heimerdinger fires long-range rockets that converge on his cursor.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0074/ability_0074_W1.webm',
      },
      {
        name: 'CH-2 Electron Storm Grenade',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/HeimerdingerE.png',
        description:
          'Heimerdinger lobs a grenade at a location, dealing damage to enemy units, as well as stunning anyone directly hit and slowing surrounding units.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0074/ability_0074_E1.webm',
      },
      {
        name: 'UPGRADE!!!',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/HeimerdingerR.png',
        description:
          'Heimerdinger invents an upgrade, causing his next spell to have increased effects. ',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0074/ability_0074_R1.webm',
      },
    ],
    splashPosition: '-718px -231px',
    lanes: ['Support'],
    releaseDate: '2009-10-10',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V0.9.25.34',
    attackRange: 550,
    region: 'Piltover',
    species: 'Yordle',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 2,
      mobility: 1,
      utility: 2,
      difficulty: 2,
      style: 100,
      damageBreakdown: {
        magic: 96.9,
        physical: 2.1,
        true_: 1,
      },
    },
    spotlightVideoID: 'PY2q3aA1NYo',
    tagArrays: [[26, 2, 67, 68], [], [103], [101], [80, 103], [75, 99]],
    ids: {
      kebab: 'heimerdinger',
      ddragon: 'Heimerdinger',
      cdragon: 74,
      wiki: 'Heimerdinger',
      universe: 'Heimerdinger',
    },
  },
  {
    name: 'Illaoi',
    title: 'the Kraken Priestess',
    roles: ['Fighter', 'Tank'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Illaoi.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Illaoi_0.jpg',
    abilities: [
      {
        name: 'Prophet of an Elder God',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Illaoi_P.png',
        description:
          "Illaoi and the <font color='#669900'>Vessels</font> she creates spawn Tentacles on nearby impassible terrain. Tentacles swing at spirits, <font color='#669900'>Vessels</font>, and victims of Illaoi's Harsh lesson. Tentacles deal physical damage to enemies hit, and will heal Illaoi if they damage a champion.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0420/ability_0420_P1.webm',
      },
      {
        name: 'Tentacle Smash',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/IllaoiQ.png',
        description:
          'Increases the damage dealt by Tentacles. When activated, Illaoi smashes down a Tentacle that deals physical damage.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0420/ability_0420_Q1.webm',
      },
      {
        name: 'Harsh Lesson',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/IllaoiW.png',
        description:
          'Illaoi leaps to her target, dealing physical damage and causing nearby Tentacles to also swing at the target.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0420/ability_0420_W1.webm',
      },
      {
        name: 'Test of Spirit',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/IllaoiE.png',
        description:
          "Illaoi rips the spirit from a foe's body, forcing it to stand before her. Spirits echo a percentage of the damage they take to the original target. If killed, or if the target gets too far from the spirit, the target will become a <font color='#669900'>Vessel</font> and begin spawning Tentacles.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0420/ability_0420_E1.webm',
      },
      {
        name: 'Leap of Faith',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/IllaoiR.png',
        description:
          'Illaoi smashes her idol into the ground, dealing physical damage to nearby enemies. A Tentacle spawns for each enemy champion hit.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0420/ability_0420_R1.webm',
      },
    ],
    splashPosition: '-571px 0px',
    lanes: ['Top'],
    releaseDate: '2015-11-24',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V5.23',
    attackRange: 125,
    region: 'Bilgewater',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 2,
      control: 1,
      mobility: 1,
      utility: 1,
      difficulty: 2,
      style: 65,
      damageBreakdown: {
        magic: 0.5,
        physical: 99.5,
        true_: 0,
      },
    },
    spotlightVideoID: 'UFkCDRlb9FA',
    tagArrays: [[26, 34, 67, 69], [], [101], [85, 99], [101], [99]],
    ids: {
      kebab: 'illaoi',
      ddragon: 'Illaoi',
      cdragon: 420,
      wiki: 'Illaoi',
      universe: 'Illaoi',
    },
  },
  {
    name: 'Irelia',
    title: 'the Blade Dancer',
    roles: ['Fighter', 'Assassin'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Irelia.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Irelia_0.jpg',
    abilities: [
      {
        name: 'Ionian Fervor',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Irelia_Passive.png',
        description:
          'When Irelia strikes enemies with spells she gains stacking bonus Attack Speed. At maximum stacks she also gains bonus damage on hit.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0039/ability_0039_P1.webm',
      },
      {
        name: 'Bladesurge',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/IreliaQ.png',
        description:
          'Irelia dashes forward to strike her target, healing herself. If the target is Marked or dies to Bladesurge, its cooldown refreshes.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0039/ability_0039_Q1.webm',
      },
      {
        name: 'Defiant Dance',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/IreliaW.png',
        description:
          'Irelia charges a strike that deals more damage as she charges. She takes reduced physical damage during the charge.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0039/ability_0039_W1.webm',
      },
      {
        name: 'Flawless Duet',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/IreliaE.png',
        description:
          'Irelia sends out two blades which converge on each other. Enemies caught in between are damaged, stunned and Marked.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0039/ability_0039_E1.webm',
      },
      {
        name: "Vanguard's Edge",
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/IreliaR.png',
        description:
          'Irelia fires a massive number of blades that explode outward upon hitting an enemy champion. Enemies hit by the blades are damaged and Marked. Afterwards the blades form a wall that will damage and slow enemies that walk through it.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0039/ability_0039_R1.webm',
      },
    ],
    splashPosition: '-476px 0px',
    lanes: ['Middle', 'Top'],
    releaseDate: '2010-11-16',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V1.0.0.105',
    attackRange: 200,
    region: 'Ionia',
    species: 'Human',
    ratings: {
      damage: 2,
      toughness: 2,
      control: 2,
      mobility: 3,
      utility: 2,
      difficulty: 2,
      style: 30,
      damageBreakdown: {
        magic: 35.7,
        physical: 63.4,
        true_: 0.8,
      },
    },
    spotlightVideoID: 'SGxQAs9ULWY',
    tagArrays: [
      [26, 2, 67, 69],
      [53, 55],
      [78, 83, 82, 88, 102],
      [89, 90, 101],
      [80, 91, 103],
      [101],
    ],
    ids: {
      kebab: 'irelia',
      ddragon: 'Irelia',
      cdragon: 39,
      wiki: 'Irelia',
      universe: 'Irelia',
    },
  },
  {
    name: 'Ivern',
    title: 'the Green Father',
    roles: ['Mage', 'Support'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Ivern.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ivern_0.jpg',
    abilities: [
      {
        name: 'Friend of the Forest',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/IvernP.png',
        description:
          'Ivern cannot attack or be attacked by non-epic monsters. Ivern can create magical groves on jungle camps which grow over time. When the grove is fully grown, Ivern may free the monsters to receive gold and experience. After level 5 Ivern can share jungle buffs with allies.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0427/ability_0427_P1.webm',
      },
      {
        name: 'Rootcaller',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/IvernQ.png',
        description:
          "Ivern conjures a vine, dealing damage and rooting enemy targets hit. Ivern's allies can dash to the rooted target.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0427/ability_0427_Q1.webm',
      },
      {
        name: 'Brushmaker',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/IvernW.png',
        description:
          "In brush, Ivern's attacks deal bonus magic damage. Ivern can activate this ability to create a patch of brush.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0427/ability_0427_W1.webm',
      },
      {
        name: 'Triggerseed',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/IvernE.png',
        description:
          'Ivern places a shield on an ally which explodes after a short duration slowing and damaging enemies.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0427/ability_0427_E1.webm',
      },
      {
        name: 'Daisy!',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/IvernR.png',
        description:
          'Ivern summons his Sentinel friend Daisy to fight with him. Daisy will send out a shockwave if she attacks the same champion three times in a row.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0427/ability_0427_R1.webm',
      },
    ],
    splashPosition: '-502px -123px',
    lanes: ['Jungle'],
    releaseDate: '2016-10-05',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V6.20',
    attackRange: 475,
    region: 'Ionia',
    species: 'Human',
    ratings: {
      damage: 1,
      toughness: 1,
      control: 3,
      mobility: 2,
      utility: 3,
      difficulty: 3,
      style: 10,
      damageBreakdown: {
        magic: 63.6,
        physical: 29.7,
        true_: 6.7,
      },
    },
    spotlightVideoID: 'Y-gsY5oAsL0',
    tagArrays: [
      [5, 26, 2, 65, 68],
      [89],
      [80, 27, 91, 101],
      [53, 103],
      [102],
      [80, 101],
    ],
    ids: {
      kebab: 'ivern',
      ddragon: 'Ivern',
      cdragon: 427,
      wiki: 'Ivern',
      universe: 'Ivern',
    },
  },
  {
    name: 'Janna',
    title: "the Storm's Fury",
    roles: ['Mage', 'Support'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Janna.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Janna_0.jpg',
    abilities: [
      {
        name: 'Tailwind',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Janna_Tailwind.png',
        description:
          "Janna passively gains bonus Move Speed, and nearby allied champions gain this bonus when moving toward her.<br><br>Additionally, Janna's basic attacks cause additional magic damage based on her bonus Move Speed.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0040/ability_0040_P1.webm',
      },
      {
        name: 'Howling Gale',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/HowlingGale.png',
        description:
          'By creating a localized change in pressure and temperature, Janna is able to create a small storm that grows in size with time. She can activate the spell again to release the storm. On release this storm will fly towards the direction it was cast in, dealing damage and knocking away any enemies in its path.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0040/ability_0040_Q1.webm',
      },
      {
        name: 'Zephyr',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SowTheWind.png',
        description:
          "Janna summons an air elemental that passively increases her Move Speed and enables her to pass through units. She may also activate this ability to deal damage and slow an enemy's Move Speed. The passive is lost while this ability is on cooldown.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0040/ability_0040_W1.webm',
      },
      {
        name: 'Eye Of The Storm',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/EyeOfTheStorm.png',
        description:
          'Janna conjures a defensive gale that shields an ally champion or turret from incoming damage and increases their Attack Damage.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0040/ability_0040_E1.webm',
      },
      {
        name: 'Monsoon',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ReapTheWhirlwind.png',
        description:
          'Janna surrounds herself in a magical storm, throwing enemies back. After the storm has settled, soothing winds heal nearby allies while the ability is active.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0040/ability_0040_R1.webm',
      },
    ],
    splashPosition: '-861px -123px',
    lanes: ['Support'],
    releaseDate: '2009-09-02',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V0.9.22.16',
    attackRange: 550,
    region: 'Zaun',
    species: 'Spirit God',
    ratings: {
      damage: 1,
      toughness: 1,
      control: 3,
      mobility: 1,
      utility: 3,
      difficulty: 1,
      style: 100,
      damageBreakdown: {
        magic: 84.2,
        physical: 9.9,
        true_: 5.9,
      },
    },
    tagArrays: [
      [4, 5, 26, 67, 68],
      [],
      [79, 80, 91],
      [102],
      [102],
      [80, 89, 99],
    ],
    ids: {
      kebab: 'janna',
      ddragon: 'Janna',
      cdragon: 40,
      wiki: 'Janna',
      universe: 'Janna',
    },
    spotlightVideoID: '',
  },
  {
    name: 'Jarvan IV',
    title: 'the Exemplar of Demacia',
    roles: ['Fighter', 'Tank'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/JarvanIV.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/JarvanIV_0.jpg',
    abilities: [
      {
        name: 'Martial Cadence',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/JarvanIV_MartialCadence.png',
        description:
          "Jarvan's first basic attack on an enemy deals bonus physical damage based on their current Health. This effect cannot occur again on the same enemy for a few seconds.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0059/ability_0059_P1.webm',
      },
      {
        name: 'Dragon Strike',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/JarvanIVDragonStrike.png',
        description:
          'Jarvan IV extends his lance, dealing physical damage and lowering the Armor of enemies in its path. Additionally, this will pull Jarvan to his Demacian Standard, knocking up enemies in his path.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0059/ability_0059_Q1.webm',
      },
      {
        name: 'Golden Aegis',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/JarvanIVGoldenAegis.png',
        description:
          'Jarvan IV calls upon the ancient kings of Demacia to shield him from harm and slow surrounding enemies.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0059/ability_0059_W1.webm',
      },
      {
        name: 'Demacian Standard',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/JarvanIVDemacianStandard.png',
        description:
          'Jarvan IV carries the pride of Demacia, passively granting him bonus Attack Speed. Activating Demacian Standard allows Jarvan IV to place a Demacian flag that deals magic damage on impact and grants Attack Speed to nearby allied champions.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0059/ability_0059_E1.webm',
      },
      {
        name: 'Cataclysm',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/JarvanIVCataclysm.png',
        description:
          'Jarvan IV heroically leaps into battle at a target with such force that he terraforms the surrounding area to create an arena around them. Nearby enemies are damaged at the moment of impact.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0059/ability_0059_R1.webm',
      },
    ],
    splashPosition: '-708px -45px',
    lanes: ['Jungle'],
    releaseDate: '2011-03-01',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V1.0.0.112',
    attackRange: 175,
    region: 'Demacia',
    species: 'Human',
    ratings: {
      damage: 2,
      toughness: 2,
      control: 2,
      mobility: 2,
      utility: 2,
      difficulty: 1,
      style: 55,
      damageBreakdown: {
        magic: 12.4,
        physical: 81.9,
        true_: 5.6,
      },
    },
    spotlightVideoID: 'RgOdf3x24qA',
    tagArrays: [
      [5, 26, 34, 67, 69],
      [53],
      [101],
      [99],
      [80, 83, 82, 103],
      [78, 83, 82, 91, 102],
    ],
    ids: {
      kebab: 'jarvan-iv',
      ddragon: 'JarvanIV',
      cdragon: 59,
      wiki: 'Jarvan_IV',
      universe: 'JarvanIV',
    },
  },
  {
    name: 'Jax',
    title: 'Grandmaster at Arms',
    roles: ['Fighter', 'Assassin'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Jax.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jax_0.jpg',
    abilities: [
      {
        name: 'Relentless Assault',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Armsmaster_MasterOfArms.png',
        description:
          "Jax's consecutive basic attacks continuously increase his Attack Speed.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0024/ability_0024_P1.webm',
      },
      {
        name: 'Leap Strike',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/JaxLeapStrike.png',
        description:
          'Jax leaps toward a unit. If they are an enemy, he strikes them with his weapon.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0024/ability_0024_Q1.webm',
      },
      {
        name: 'Empower',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/JaxEmpowerTwo.png',
        description:
          'Jax charges his weapon with energy, causing his next attack to deal additional damage.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0024/ability_0024_W1.webm',
      },
      {
        name: 'Counter Strike',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/JaxCounterStrike.png',
        description:
          "Jax's combat prowess allows him to dodge all incoming attacks for a short duration and then quickly counterattack, stunning all surrounding enemies.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0024/ability_0024_E1.webm',
      },
      {
        name: "Grandmaster's Might",
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/JaxRelentlessAssault.png',
        description:
          'Every third consecutive attack deals additional Magic Damage. Additionally, Jax can activate this ability to strengthen his resolve, increasing his Armor and Magic Resist for a short duration.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0024/ability_0024_R1.webm',
      },
    ],
    splashPosition: '-708px -90px',
    lanes: ['Top'],
    releaseDate: '2009-02-21',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V0.1.0.2',
    attackRange: 125,
    region: 'Runeterra',
    species: 'Unknown',
    ratings: {
      damage: 3,
      toughness: 2,
      control: 2,
      mobility: 2,
      utility: 1,
      difficulty: 1,
      style: 10,
      damageBreakdown: {
        magic: 24.9,
        physical: 73.5,
        true_: 1.6,
      },
    },
    spotlightVideoID: 'B18qApcVCRg',
    tagArrays: [
      [2, 67, 69],
      [55],
      [78, 83, 82, 102],
      [53, 99],
      [80, 91, 99],
      [53, 99],
    ],
    ids: {
      kebab: 'jax',
      ddragon: 'Jax',
      cdragon: 24,
      wiki: 'Jax',
      universe: 'Jax',
    },
  },
  {
    name: 'Jayce',
    title: 'the Defender of Tomorrow',
    roles: ['Fighter', 'Marksman'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Jayce.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jayce_0.jpg',
    abilities: [
      {
        name: 'Hextech Capacitor',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Jayce_Passive.png',
        description:
          'When Jayce swaps weapons he gains movement speed for a short duration.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0126/ability_0126_P1.webm',
      },
      {
        name: 'To the Skies! / Shock Blast',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/JayceToTheSkies.png',
        description:
          'Hammer Stance: Leaps to an enemy dealing physical damage and slowing enemies.<br><br>Cannon Stance: Fires an orb of electricity that detonates upon hitting an enemy (or reaching the end of its path) dealing physical damage to all enemies hit.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0126/ability_0126_Q1.webm',
      },
      {
        name: 'Lightning Field / Hyper Charge',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/JayceStaticField.png',
        description:
          'Hammer Stance: Passive: Restores Mana per strike. Active: Creates a field of lightning damaging nearby enemies for several seconds.<br><br>Cannon Stance: Gains a burst of energy, increasing Attack Speed to maximum for several attacks.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0126/ability_0126_W1.webm',
      },
      {
        name: 'Thundering Blow / Acceleration Gate',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/JayceThunderingBlow.png',
        description:
          'Hammer Stance: Deals magic damage to an enemy and knocks them back a short distance.<br><br>Cannon Stance: Deploys an Acceleration Gate increasing the Move Speed of all allied champions who pass through it. If Shock Blast is fired through the gate the missile speed, range, and damage will increase.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0126/ability_0126_E1.webm',
      },
      {
        name: 'Mercury Cannon / Mercury Hammer',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/JayceStanceHtG.png',
        description:
          "Hammer Stance: Transforms the Mercury Hammer into the Mercury Cannon gaining new abilities and increased range. The first attack in this form reduces the target's Armor and Magic Resist.<br><br>Cannon Stance: Transforms the Mercury Cannon into the Mercury Hammer gaining new abilities and increasing Armor and Magic Resist. The first attack in this form deals additional magic damage.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0126/ability_0126_R1.webm',
      },
    ],
    splashPosition: '-749px -145px',
    lanes: ['Top'],
    releaseDate: '2012-07-07',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V1.0.0.142',
    attackRange: 125,
    region: 'Piltover',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 1,
      mobility: 2,
      utility: 2,
      difficulty: 2,
      style: 45,
      damageBreakdown: {
        magic: 11.4,
        physical: 88.2,
        true_: 0.4,
      },
    },
    spotlightVideoID: 'p2YuyBZ_zMU',
    tagArrays: [
      [4, 26, 67, 69, 71],
      [],
      [78, 83, 82],
      [52, 55, 95],
      [80],
      [53, 55, 99],
    ],
    ids: {
      kebab: 'jayce',
      ddragon: 'Jayce',
      cdragon: 126,
      wiki: 'Jayce',
      universe: 'Jayce',
    },
  },
  {
    name: 'Jhin',
    title: 'the Virtuoso',
    roles: ['Mage', 'Marksman'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Jhin.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jhin_0.jpg',
    abilities: [
      {
        name: 'Whisper',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Jhin_P.png',
        description:
          "Jhin's hand cannon, Whisper, is a precise instrument designed to deal superior damage. It fires at a fixed rate and carries only four shots. Jhin imbues the final bullet with dark magics to critically strike and deal bonus execute damage. Whenever Whisper crits, it inspires Jhin with a burst of Move Speed.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0202/ability_0202_P1.webm',
      },
      {
        name: 'Dancing Grenade',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/JhinQ.png',
        description:
          'Jhin launches a magical cartridge at an enemy. It can hit up to four targets and gains damage each time it kills.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0202/ability_0202_Q1.webm',
      },
      {
        name: 'Deadly Flourish',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/JhinW.png',
        description:
          "Jhin brandishes his cane, firing a single shot with incredible range. It pierces through minions and monsters, but stops on the first champion hit. If the target was recently struck by Jhin's allies, lotus traps, or damaged by Jhin, they are rooted.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0202/ability_0202_W1.webm',
      },
      {
        name: 'Captive Audience',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/JhinE.png',
        description:
          "Jhin places an invisible lotus trap that blooms when walked over. It slows nearby enemies before dealing damage with an explosion of serrated petals. <br><br><font color='#FFFFFF'>Beauty in Death -</font> When Jhin kills an enemy champion, a lotus trap will bloom near their corpse.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0202/ability_0202_E1.webm',
      },
      {
        name: 'Curtain Call',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/JhinR.png',
        description:
          'Jhin channels, transforming Whisper into a shoulder-mounted mega-cannon. It is able to fire 4 super shots at extreme range that pierce through minions and monsters, but stop on the first champion impacted. Whisper cripples enemies hit, which slows them and deals execute damage. The 4th shot is perfectly crafted, epically powerful, and guaranteed to critically strike.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0202/ability_0202_R1.webm',
      },
    ],
    splashPosition: '-520px -56px',
    lanes: ['Bottom'],
    releaseDate: '2016-02-01',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V6.2',
    attackRange: 550,
    region: 'Ionia',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 2,
      mobility: 1,
      utility: 1,
      difficulty: 2,
      style: 20,
      damageBreakdown: {
        magic: 10.5,
        physical: 88,
        true_: 1.5,
      },
    },
    spotlightVideoID: 'QvNw0A-D0T0',
    tagArrays: [
      [26, 67, 68],
      [104],
      [102],
      [80, 27, 101],
      [105, 103],
      [79, 89, 101],
    ],
    ids: {
      kebab: 'jhin',
      ddragon: 'Jhin',
      cdragon: 202,
      wiki: 'Jhin',
      universe: 'Jhin',
    },
  },
  {
    name: 'Jinx',
    title: 'the Loose Cannon',
    roles: ['Marksman'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Jinx.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg',
    abilities: [
      {
        name: 'Get Excited!',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Jinx_Passive.png',
        description:
          'Jinx receives massively increased Move Speed and Attack Speed whenever she helps kill or destroy an enemy champions epic jungle monster, or structure.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0222/ability_0222_P1.webm',
      },
      {
        name: 'Switcheroo!',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/JinxQ.png',
        description:
          'Jinx modifies her basic attacks by swapping between Pow-Pow, her minigun and Fishbones, her rocket launcher. Attacks with Pow-Pow grant Attack Speed, while attacks with Fishbones deal area of effect damage, gain increased range, but drain Mana and attack slower.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0222/ability_0222_Q1.webm',
      },
      {
        name: 'Zap!',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/JinxW.png',
        description:
          'Jinx uses Zapper, her shock pistol, to fire a blast that deals damage to the first enemy hit, slowing and revealing it.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0222/ability_0222_W1.webm',
      },
      {
        name: 'Flame Chompers!',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/JinxE.png',
        description:
          'Jinx throws out a line of snare grenades that explode after 5 seconds, lighting enemies on fire. Flame Chompers will bite enemy champions who walk over them, rooting them in place.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0222/ability_0222_E1.webm',
      },
      {
        name: 'Super Mega Death Rocket!',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/JinxR.png',
        description:
          'Jinx fires a super rocket across the map that gains damage as it travels. The rocket will explode upon colliding with an enemy champion, dealing damage to it and surrounding enemies based on their missing Health.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0222/ability_0222_R1.webm',
      },
    ],
    splashPosition: '-663px -56px',
    lanes: ['Bottom'],
    releaseDate: '2013-10-10',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V3.12',
    attackRange: 525,
    region: 'Zaun',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 2,
      mobility: 1,
      utility: 1,
      difficulty: 2,
      style: 10,
      damageBreakdown: {
        magic: 4.5,
        physical: 86.4,
        true_: 9.1,
      },
    },
    spotlightVideoID: 'KN3OYwP8nHE',
    tagArrays: [
      [26, 67, 68],
      [53, 88],
      [55, 92, 99],
      [101],
      [80, 27, 8, 103],
      [87, 101],
    ],
    ids: {
      kebab: 'jinx',
      ddragon: 'Jinx',
      cdragon: 222,
      wiki: 'Jinx',
      universe: 'Jinx',
    },
  },
  {
    ids: {
      cdragon: 897,
      ddragon: 'KSante',
      kebab: 'k-sante',
      universe: 'KSante',
      wiki: "K'Sante",
    },
    name: "K'Sante",
    title: 'the Pride of Nazumah',
    roles: ['Fighter', 'Tank'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/12.21.1/img/champion/KSante.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/KSante_0.jpg',
    resource: 'Mana',
    attackRange: 175,
    abilities: [
      {
        name: 'Dauntless Instinct',
        img: 'https://ddragon.leagueoflegends.com/cdn/12.21.1/img/passive/Icons_KSante_P.png',
        description:
          "K'Sante's Abilities mark targets to take more damage on his next Attack.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0897/ability_0897_P1.webm',
      },
      {
        name: 'Ntofo Strikes',
        img: 'https://ddragon.leagueoflegends.com/cdn/12.21.1/img/spell/KSanteQ.png',
        description:
          'Strike a weapon forward, damaging and slowing all enemies in a short line.<br><br>On hit, grants a stack for a few seconds. At 2 stacks, this skill fires a shockwave that pulls enemies in.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0897/ability_0897_Q1.webm',
      },
      {
        name: 'Path Maker',
        img: 'https://ddragon.leagueoflegends.com/cdn/12.21.1/img/spell/KSanteW.png',
        description:
          "K'Sante charges up before dashing. K'Sante is unstoppable and takes less damage while charging. Any targets hit by the dash are knocked to the end of the dash and stunned.<br><br>",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0897/ability_0897_W1.webm',
      },
      {
        name: 'Footwork',
        img: 'https://ddragon.leagueoflegends.com/cdn/12.21.1/img/spell/KSanteE.png',
        description:
          "K'Sante will dash to an ally and both will gain a shield. If there is no ally, K'Sante will still dash to the location at a reduced range and gain a shield.<br>",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0897/ability_0897_E1.webm',
      },
      {
        name: 'All Out',
        img: 'https://ddragon.leagueoflegends.com/cdn/12.21.1/img/spell/KSanteR.png',
        description:
          "K'Sante smashes an enemy away. If the enemy hits a wall they will go through the wall taking more damage. K'Sante will appear behind the target and goes All Out by shredding his defenses but greatly increasing his damage.<br><br>",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0897/ability_0897_R1.webm',
      },
    ],
    ratings: {
      difficulty: 3,
      style: 30,
      damage: 2,
      toughness: 3,
      control: 3,
      mobility: 2,
      utility: 2,
      damageBreakdown: {
        magic: 4.5,
        physical: 90.1,
        true_: 5.4,
      },
    },
    tagArrays: [[], [], [], [], [], []],
    lanes: ['Top'],
    rangeType: 'Melee',
    releaseDate: '2022-11-02',
    releasePatch: '12.21',
    region: 'Shurima',
    species: 'Human',
    spotlightVideoID: 'sJupa3WcN88',
  },
  {
    name: "Kai'Sa",
    title: 'Daughter of the Void',
    roles: ['Marksman'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Kaisa.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kaisa_0.jpg',
    abilities: [
      {
        name: 'Second Skin',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Kaisa_Passive.png',
        description:
          "Kai'Sa's basic attacks stack Plasma, dealing increasing bonus magic damage. Allies' immobilizing effects help stack Plasma. Additionally, Kai'Sa's item purchases upgrade her basic spells to have more powerful properties.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0145/ability_0145_P1.webm',
      },
      {
        name: 'Icathian Rain',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KaisaQ.png',
        description:
          "Kai'Sa shoots a swarm of missiles that seek out nearby targets.<br><br>Living Weapon: Icathian Rain is upgraded to shoot more missiles.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0145/ability_0145_Q1.webm',
      },
      {
        name: 'Void Seeker',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KaisaW.png',
        description:
          "Kai'Sa shoots a long range missile, marking enemies with her passive.<br><br>Living Weapon: Void Seeker is upgraded to apply more passive marks and reduce cooldown on champion hit.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0145/ability_0145_W1.webm',
      },
      {
        name: 'Supercharge',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KaisaE.png',
        description:
          "Kai'Sa briefly increases her Move Speed, then increases her Attack Speed.<br><br>Living Weapon: Supercharge is upgraded to briefly grant Invisibility.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0145/ability_0145_E1.webm',
      },
      {
        name: 'Killer Instinct',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KaisaR.png',
        description: "Kai'Sa dashes near an enemy champion.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0145/ability_0145_R1.webm',
      },
    ],
    lanes: ['Bottom'],
    releaseDate: '2018-03-07',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V8.5',
    attackRange: 525,
    region: 'Void',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 1,
      mobility: 3,
      utility: 1,
      difficulty: 1,
      style: 10,
      damageBreakdown: {
        magic: 24.6,
        physical: 66.3,
        true_: 9.1,
      },
    },
    spotlightVideoID: 'yLNMZt3FvFo',
    tagArrays: [
      [67, 68],
      [],
      [100, 108, 74],
      [97, 101, 74],
      [99, 74],
      [86, 97, 103],
    ],
    ids: {
      kebab: 'kai-sa',
      ddragon: 'Kaisa',
      cdragon: 145,
      wiki: "Kai'Sa",
      universe: 'Kaisa',
    },
  },
  {
    name: 'Kalista',
    title: 'the Spear of Vengeance',
    roles: ['Marksman'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Kalista.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kalista_0.jpg',
    abilities: [
      {
        name: 'Martial Poise',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Kalista_Passive.png',
        description:
          "Enter a movement command while winding up Kalista's basic attack or Pierce to lunge a short distance when she launches her attack.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0429/ability_0429_P1.webm',
      },
      {
        name: 'Pierce',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KalistaMysticShot.png',
        description:
          'Throw a fast moving spear that passes through enemies it kills.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0429/ability_0429_Q1.webm',
      },
      {
        name: 'Sentinel',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KalistaW.png',
        description:
          'Gain bonus damage when Kalista and her Oathsworn strike the same target. <br><br>Activate to send a soul to scout out the path, revealing the area in front of it.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0429/ability_0429_W1.webm',
      },
      {
        name: 'Rend',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KalistaExpungeWrapper.png',
        description:
          'Attacks impale their targets with spears. Activate to rip the spears out, slowing and dealing escalating damage.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0429/ability_0429_E1.webm',
      },
      {
        name: "Fate's Call",
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KalistaRx.png',
        description:
          'Kalista teleports the Oathsworn ally to herself. They gain the ability to dash toward a position, knocking enemy champions back.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0429/ability_0429_R1.webm',
      },
    ],
    lanes: ['Bottom'],
    releaseDate: '2014-11-20',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V4.20',
    attackRange: 525,
    region: 'Shadow Isles',
    species: 'Wraith',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 1,
      mobility: 3,
      utility: 2,
      difficulty: 3,
      style: 10,
      damageBreakdown: {
        magic: 7.7,
        physical: 89.4,
        true_: 2.9,
      },
    },
    spotlightVideoID: 'XCR-tMpKtt8',
    tagArrays: [
      [5, 26, 31, 32, 34, 39, 67, 68],
      [52],
      [101],
      [101],
      [88, 95, 94, 100],
      [22, 101],
    ],
    ids: {
      kebab: 'kalista',
      ddragon: 'Kalista',
      cdragon: 429,
      wiki: 'Kalista',
      universe: 'Kalista',
    },
  },
  {
    name: 'Karma',
    title: 'the Enlightened One',
    roles: ['Mage', 'Support'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Karma.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Karma_0.jpg',
    abilities: [
      {
        name: 'Gathering Fire',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Karma_Passive.png',
        description:
          "After using 5 spells or attacks, Karma's next ability will be enhanced.",
        video: '',
      },
      {
        name: 'Inner Flame',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KarmaQ.png',
        description:
          'Karma sends forth a ball of spirit energy that explodes and deals damage upon hitting an enemy unit.<br><br>Mantra Bonus: In addition to the explosion, Mantra increases the destructive power of her Inner Flame, creating a cataclysm which deals damage after a short delay.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0043/ability_0043_Q1.webm',
      },
      {
        name: 'Focused Resolve',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KarmaSpiritBind.png',
        description:
          'Karma creates a tether between herself and a targeted enemy, dealing damage and revealing them. If the tether is not broken, the enemy will be rooted and damaged again.<br><br>Mantra Bonus: Karma strengthens the link, healing herself and extending the root duration.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0043/ability_0043_W1.webm',
      },
      {
        name: 'Inspire',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KarmaSolKimShield.png',
        description:
          'Karma summons a protective shield that absorbs incoming damage and increases the Move Speed of the protected ally.<br><br>Mantra Bonus: Energy radiates out from her target, strengthening the initial shield and applying Inspire to nearby allied champions.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0043/ability_0043_E1.webm',
      },
      {
        name: 'Mantra',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KarmaMantra.png',
        description:
          'Karma empowers her next ability to do an additional effect. Mantra is available at level 1 and does not require a skill point.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0043/ability_0043_R1.webm',
      },
    ],
    lanes: ['Support'],
    releaseDate: '2011-02-01',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V1.0.0.110',
    attackRange: 525,
    region: 'Ionia',
    species: 'Human',
    ratings: {
      damage: 2,
      toughness: 1,
      control: 2,
      mobility: 1,
      utility: 2,
      difficulty: 1,
      style: 100,
      damageBreakdown: {
        magic: 86.9,
        physical: 10.8,
        true_: 2.4,
      },
    },
    spotlightVideoID: 'lWIj3IRz8DI',
    tagArrays: [[26, 67, 68], [], [101], [80, 27, 102], [102], [99]],
    ids: {
      kebab: 'karma',
      ddragon: 'Karma',
      cdragon: 43,
      wiki: 'Karma',
      universe: 'Karma',
    },
  },
  {
    name: 'Karthus',
    title: 'the Deathsinger',
    roles: ['Mage'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Karthus.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Karthus_0.jpg',
    abilities: [
      {
        name: 'Death Defied',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Karthus_Passive.png',
        description:
          'Upon dying, Karthus enters a spirit form that allows him to continue casting spells.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0030/ability_0030_P1.webm',
      },
      {
        name: 'Lay Waste',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KarthusLayWasteA1.png',
        description:
          'Karthus unleashes a delayed blast at a location, dealing damage to nearby enemies. Deals increased damage to isolated enemies. ',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0030/ability_0030_Q1.webm',
      },
      {
        name: 'Wall of Pain',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KarthusWallOfPain.png',
        description:
          'Karthus creates a passable screen of leeching energy. Any enemy units that walk through the screen have their Movement Speed and Magic Resist reduced for a period.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0030/ability_0030_W1.webm',
      },
      {
        name: 'Defile',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KarthusDefile.png',
        description:
          'Karthus passively steals energy from his victims, gaining Mana on each kill. Alternatively, Karthus can surround himself in the souls of his prey, dealing damage to nearby enemies, but quickly draining his own Mana.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0030/ability_0030_E1.webm',
      },
      {
        name: 'Requiem',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KarthusFallenOne.png',
        description:
          'After channeling for 3 seconds, Karthus deals damage to all enemy champions.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0030/ability_0030_R1.webm',
      },
    ],
    lanes: ['Jungle'],
    releaseDate: '2009-06-12',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V0.7.20.110',
    attackRange: 450,
    region: 'Shadow Isles',
    species: 'Wraith',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 1,
      mobility: 1,
      utility: 2,
      difficulty: 2,
      style: 100,
      damageBreakdown: {
        magic: 95.7,
        physical: 0.6,
        true_: 3.6,
      },
    },
    spotlightVideoID: 'zSKw3m7JGvg',
    tagArrays: [
      [26, 32, 48, 67, 68],
      [],
      [103],
      [103],
      [92, 95, 88, 99],
      [79, 87, 100],
    ],
    ids: {
      kebab: 'karthus',
      ddragon: 'Karthus',
      cdragon: 30,
      wiki: 'Karthus',
      universe: 'Karthus',
    },
  },
  {
    name: 'Kassadin',
    title: 'the Void Walker',
    roles: ['Assassin', 'Mage'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Kassadin.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kassadin_0.jpg',
    abilities: [
      {
        name: 'Void Stone',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Kassadin_Passive.png',
        description:
          'Kassadin takes reduced magic damage and ignores unit collision.',
        video: '',
      },
      {
        name: 'Null Sphere',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/NullLance.png',
        description:
          'Kassadin fires an orb of void energy at a target, dealing damage and interrupting channels. The excess energy forms around himself, granting a temporary shield that absorbs magic damage.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0038/ability_0038_Q1.webm',
      },
      {
        name: 'Nether Blade',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/NetherBlade.png',
        description:
          "Passive: Kassadin's basic attacks deal bonus magic damage. Active: Kassadin's next basic attack deals significant bonus magic damage and restores Mana.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0038/ability_0038_W1.webm',
      },
      {
        name: 'Force Pulse',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ForcePulse.png',
        description:
          'Kassadin draws energy from spells cast in his vicinity. Upon charging up, Kassadin can use Force Pulse to damage and slow enemies in a cone in front of him.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0038/ability_0038_E1.webm',
      },
      {
        name: 'Riftwalk',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/RiftWalk.png',
        description:
          'Kassadin teleports to a nearby location dealing damage to nearby enemy units. Multiple Riftwalks in a short period of time cost additional Mana but also deal additional damage.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0038/ability_0038_R1.webm',
      },
    ],
    lanes: ['Middle'],
    releaseDate: '2009-08-07',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V0.9.22.7',
    attackRange: 150,
    region: 'Void',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 2,
      control: 1,
      mobility: 3,
      utility: 1,
      difficulty: 2,
      style: 90,
      damageBreakdown: {
        magic: 93,
        physical: 5.9,
        true_: 1.1,
      },
    },
    tagArrays: [
      [26, 67, 69],
      [],
      [102],
      [53, 55, 95, 99],
      [11, 101],
      [78, 81, 103],
    ],
    ids: {
      kebab: 'kassadin',
      ddragon: 'Kassadin',
      cdragon: 38,
      wiki: 'Kassadin',
      universe: 'Kassadin',
    },
    spotlightVideoID: 'WiIrMY1Nwrw',
  },
  {
    name: 'Katarina',
    title: 'the Sinister Blade',
    roles: ['Assassin', 'Mage'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Katarina.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_0.jpg',
    abilities: [
      {
        name: 'Voracity',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Katarina_Passive.png',
        description:
          "Whenever an enemy champion dies that Katarina has damaged recently, her remaining ability cooldowns are dramatically reduced.<br><br>If Katarina picks up a <font color='#FFF673'>Dagger</font>, she uses it to slash through all nearby enemies, dealing magic damage.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0055/ability_0055_P1.webm',
      },
      {
        name: 'Bouncing Blade',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KatarinaQ.png',
        description:
          "Katarina throws a <font color='#FFF673'>Dagger</font> at the target that then bounces to nearby enemies before ricocheting onto the ground.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0055/ability_0055_Q1.webm',
      },
      {
        name: 'Preparation',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KatarinaW.png',
        description:
          "Katarina gains a burst of Move Speed, tossing a <font color='#FFF673'>Dagger</font> into the air directly above herself.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0055/ability_0055_W1.webm',
      },
      {
        name: 'Shunpo',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KatarinaEWrapper.png',
        description:
          'Katarina blinks to the target, striking it if its an enemy, or striking the nearest enemy otherwise.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0055/ability_0055_E1.webm',
      },
      {
        name: 'Death Lotus',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KatarinaR.png',
        description:
          'Katarina becomes a flurry of blades, dealing massive magic damage while she channels to the 3 nearest enemy champions.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0055/ability_0055_R1.webm',
      },
    ],
    lanes: ['Middle'],
    releaseDate: '2009-09-19',
    resource: 'None',
    rangeType: 'Melee',
    releasePatch: 'V0.9.25.21',
    attackRange: 125,
    region: 'Noxus',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 1,
      mobility: 3,
      utility: 1,
      difficulty: 2,
      style: 100,
      damageBreakdown: {
        magic: 68.8,
        physical: 23.3,
        true_: 7.9,
      },
    },
    spotlightVideoID: 'soCg5RbgYIA',
    tagArrays: [
      [62, 69],
      [94, 88],
      [94, 102],
      [94, 99],
      [78, 81, 94, 103],
      [79, 89, 100, 108],
    ],
    ids: {
      kebab: 'katarina',
      ddragon: 'Katarina',
      cdragon: 55,
      wiki: 'Katarina',
      universe: 'Katarina',
    },
  },
  {
    name: 'Kayle',
    title: 'the Righteous',
    roles: ['Fighter', 'Support'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Kayle.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kayle_0.jpg',
    abilities: [
      {
        name: 'Divine Ascent',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Kayle_P.png',
        description:
          "Kayle's attacks are empowered by the heavens as she levels up and spends skill points. Her wings are lit aflame as she progressively gains Attack Speed, Movement Speed, Attack Range, and waves of fire on her attacks.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0010/ability_0010_P1.webm',
      },
      {
        name: 'Radiant Blast',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KayleQ.png',
        description:
          'Kayle conjures a portal, summoning a celestial sword that pierces through enemies, slowing, damaging, and reducing the resistances of all hit.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0010/ability_0010_Q1.webm',
      },
      {
        name: 'Celestial Blessing',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KayleW.png',
        description:
          'Blessed by the divine, Kayle heals and grants movement speed to herself and the nearest ally.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0010/ability_0010_W1.webm',
      },
      {
        name: 'Starfire Spellblade',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KayleE.png',
        description:
          "Passive: Kayle's celestial sword, Virtue, deals bonus magic damage to enemies she attacks.<br><br>Active: Kayle's next attack smites her target with celestial fire, dealing bonus damage proportionate to their missing health.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0010/ability_0010_E1.webm',
      },
      {
        name: 'Divine Judgment',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KayleR.png',
        description:
          'Kayle makes an ally invulnerable and calls upon former Aspects of Justice to purify the area around her target with a holy rain of swords.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0010/ability_0010_R1.webm',
      },
    ],
    lanes: ['Top'],
    releaseDate: '2009-02-21',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V0.1.0.2',
    attackRange: 175,
    region: 'Targon',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 1,
      mobility: 1,
      utility: 3,
      difficulty: 2,
      style: 20,
      damageBreakdown: {
        magic: 71.3,
        physical: 23.2,
        true_: 5.5,
      },
    },
    spotlightVideoID: 'GV074SIfNhA',
    tagArrays: [[26, 31, 67, 69], [75], [101], [100], [53, 99], [102]],
    ids: {
      kebab: 'kayle',
      ddragon: 'Kayle',
      cdragon: 10,
      wiki: 'Kayle',
      universe: 'Kayle',
    },
  },
  {
    name: 'Kayn',
    title: 'the Shadow Reaper',
    roles: ['Fighter', 'Assassin'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Kayn.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kayn_0.jpg',
    abilities: [
      {
        name: 'The Darkin Scythe',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Kayn_Passive_Primary.png',
        description:
          "Kayn wields an ancient weapon and fights Rhaast, the darkin within it, for control. Either the <font color='#fe5c50'>Darkin</font> will triumph, or Kayn will master Rhaast and become the <font color='#8484fb'>Shadow Assassin</font>.<br><br><font color='#fe5c50'>Darkin:</font> Heal for a percentage of spell damage dealt to champions.<br><br><font color='#8484fb'>Shadow Assassin:</font> For the first few seconds in combat with enemy champions, deal bonus damage.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0141/ability_0141_P1.webm',
      },
      {
        name: 'Reaping Slash',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KaynQ.png',
        description: 'Kayn dashes, then slashes. Both deal damage.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0141/ability_0141_Q1.webm',
      },
      {
        name: "Blade's Reach",
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KaynW.png',
        description: 'Kayn damages and slows targets in a line.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0141/ability_0141_W1.webm',
      },
      {
        name: 'Shadow Step',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KaynE.png',
        description: 'Kayn can walk through terrain.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0141/ability_0141_E1.webm',
      },
      {
        name: 'Umbral Trespass',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KaynR.png',
        description:
          "Kayn hides in an enemy's body, dealing massive damage when he bursts out.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0141/ability_0141_R1.webm',
      },
    ],
    lanes: ['Jungle'],
    releaseDate: '2017-07-12',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V7.14',
    attackRange: 175,
    region: 'Ionia',
    species: 'Darkin',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 1,
      mobility: 3,
      utility: 1,
      difficulty: 3,
      style: 0,
      damageBreakdown: {
        magic: 7.4,
        physical: 86.4,
        true_: 6.2,
      },
    },
    spotlightVideoID: 'pPaauwI6G5s',
    tagArrays: [
      [5, 26, 31, 32, 67, 69],
      [72, 75, 77],
      [78, 83, 82, 101],
      [101],
      [78, 99],
      [78, 81, 89, 102],
    ],
    ids: {
      kebab: 'kayn',
      ddragon: 'Kayn',
      cdragon: 141,
      wiki: 'Kayn',
      universe: 'Kayn',
    },
  },
  {
    name: 'Kennen',
    title: 'the Heart of the Tempest',
    roles: ['Mage', 'Marksman'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Kennen.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kennen_0.jpg',
    abilities: [
      {
        name: 'Mark of the Storm',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Kennen_Passive.png',
        description: 'Kennen stuns enemies he hits 3 times with his abilities.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0085/ability_0085_P1.webm',
      },
      {
        name: 'Thundering Shuriken',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KennenShurikenHurlMissile1.png',
        description:
          'Kennen throws a fast moving shuriken towards a location, causing damage and adding a Mark of the Storm to any opponent that it hits.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0085/ability_0085_Q1.webm',
      },
      {
        name: 'Electrical Surge',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KennenBringTheLight.png',
        description:
          'Kennen passively deals extra damage and adds a Mark of the Storm to his target every few attacks, and he can activate this ability to damage and add another Mark of the Storm to targets who are already marked.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0085/ability_0085_W1.webm',
      },
      {
        name: 'Lightning Rush',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KennenLightningRush.png',
        description:
          'Kennen morphs into a lightning form, enabling him to pass through units and apply a Mark of the Storm. Kennen gains movement speed when entering this form, and attack speed when leaving it.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0085/ability_0085_E1.webm',
      },
      {
        name: 'Slicing Maelstrom',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KennenShurikenStorm.png',
        description:
          'Kennen summons a storm that strikes at nearby enemy champions for magical damage.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0085/ability_0085_R1.webm',
      },
    ],
    lanes: ['Top'],
    releaseDate: '2010-04-08',
    resource: 'Energy',
    rangeType: 'Ranged',
    releasePatch: 'V1.0.0.82',
    attackRange: 550,
    region: 'Ionia',
    species: 'Yordle',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 3,
      mobility: 1,
      utility: 1,
      difficulty: 2,
      style: 65,
      damageBreakdown: {
        magic: 86.8,
        physical: 12.6,
        true_: 0.7,
      },
    },
    spotlightVideoID: 'ZmYVifYPFsY',
    tagArrays: [[2, 63, 68], [], [101], [53, 100], [91, 99], [99]],
    ids: {
      kebab: 'kennen',
      ddragon: 'Kennen',
      cdragon: 85,
      wiki: 'Kennen',
      universe: 'Kennen',
    },
  },
  {
    name: "Kha'Zix",
    title: 'the Voidreaver',
    roles: ['Assassin'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Khazix.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Khazix_0.jpg',
    abilities: [
      {
        name: 'Unseen Threat',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Khazix_P.png',
        description:
          "Nearby enemies that are <font color='#FFF673'>Isolated</font> from their allies are marked. Kha'Zix's abilities have interactions with <font color='#FFF673'>Isolated</font> targets.<br><br>When Kha'Zix is not visible to the enemy team, he gains Unseen Threat, causing his next basic attack against an enemy champion to deal bonus magic damage and slow them for a few seconds.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0121/ability_0121_P1.webm',
      },
      {
        name: 'Taste Their Fear',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KhazixQ.png',
        description:
          "Deals physical damage to the target. Damage increased on <font color='#FFF673'>Isolated</font> targets. If he chooses to <font color='#00DD33'>Evolve Reaper Claws</font>, this refunds a percent of it's cooldown against <font color='#FFF673'>Isolated</font> targets. Kha'Zix also gains increased range on his basic attacks and Taste Their Fear.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0121/ability_0121_Q1.webm',
      },
      {
        name: 'Void Spike',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KhazixW.png',
        description:
          "Kha'Zix fires exploding spikes that deal physical damage to enemies hit. Kha'Zix is healed if he is also within the explosion radius. If he chooses to <font color='#00DD33'>Evolve Spike Racks</font>, Void Spike now fires three spikes in a cone, slow enemies hit, and reveals enemy champions hit for 2 seconds. <font color='#FFF673'>Isolated</font> targets are slowed for extra.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0121/ability_0121_W1.webm',
      },
      {
        name: 'Leap',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KhazixE.png',
        description:
          "Kha'Zix leaps to an area, dealing physical damage upon landing. If he chooses to <font color='#00DD33'>Evolve Wings</font>, Leap's range increases by 200 and the cooldown resets on champion kill or assist.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0121/ability_0121_E1.webm',
      },
      {
        name: 'Void Assault',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KhazixR.png',
        description:
          "Each rank allows Kha'Zix to evolve one of his abilities, giving it a unique additional effect. When activated, Kha'Zix becomes <font color='#91d7ee'>Invisible</font>, triggering Unseen Threat and increasing Movement Speed. If he chooses to <font color='#00DD33'>Evolve Adaptive Cloaking</font>, Void Assault gains increased <font color='#91d7ee'>Invisibility</font> duration, and an additional use.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0121/ability_0121_R1.webm',
      },
    ],
    lanes: ['Jungle'],
    releaseDate: '2012-09-27',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V1.0.0.148',
    attackRange: 125,
    region: 'Void',
    species: 'Voidborn',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 1,
      mobility: 2,
      utility: 1,
      difficulty: 2,
      style: 55,
      damageBreakdown: {
        magic: 5.6,
        physical: 89.9,
        true_: 4.5,
      },
    },
    spotlightVideoID: 'jKLK9zFiVII',
    tagArrays: [
      [26, 67, 69],
      [53],
      [102, 74],
      [101, 74],
      [78, 83, 82, 103, 74],
      [91, 99, 74],
    ],
    ids: {
      kebab: 'kha-zix',
      ddragon: 'Khazix',
      cdragon: 121,
      wiki: "Kha'Zix",
      universe: 'Khazix',
    },
  },
  {
    name: 'Kindred',
    title: 'The Eternal Hunters',
    roles: ['Marksman'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Kindred.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kindred_0.jpg',
    abilities: [
      {
        name: 'Mark of the Kindred',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Kindred_Passive.png',
        description:
          "Kindred can mark targets to Hunt. Successfully completing a Hunt permanently empowers Kindred's basic abilities. Every 4 hunts completed also increases Kindred's basic attack range.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0203/ability_0203_P1.webm',
      },
      {
        name: 'Dance of Arrows',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KindredQ.png',
        description:
          'Kindred tumbles and shoots up to three arrows at nearby targets.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0203/ability_0203_Q1.webm',
      },
      {
        name: "Wolf's Frenzy",
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KindredW.png',
        description:
          "Wolf enrages and attacks enemies around him.  Lamb passively gains stacks by moving and attacking. When fully charged, Lamb's next attack restores health.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0203/ability_0203_W1.webm',
      },
      {
        name: 'Mounting Dread',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KindredEWrapper.png',
        description:
          'Lamb fires a carefully placed shot, slowing the target. If Lamb attacks the target two more times, her third attack instead directs Wolf to pounce on the enemy, savaging them for massive damage.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0203/ability_0203_E1.webm',
      },
      {
        name: "Lamb's Respite",
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KindredR.png',
        description:
          'Lamb grants all living things inside a zone a respite from death. Until the effect ends, nothing can die. At the end, units are healed.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0203/ability_0203_R1.webm',
      },
    ],
    lanes: ['Jungle'],
    releaseDate: '2015-10-14',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V5.20',
    attackRange: 500,
    region: 'Runeterra',
    species: 'Spirit God',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 2,
      mobility: 3,
      utility: 2,
      difficulty: 3,
      style: 20,
      damageBreakdown: {
        magic: 19.5,
        physical: 68.1,
        true_: 12.4,
      },
    },
    spotlightVideoID: 'h0Pwn7G-eLE',
    tagArrays: [
      [26, 31, 67, 68],
      [76, 73, 88],
      [78, 83, 82, 101],
      [108, 103],
      [102],
      [99],
    ],
    ids: {
      kebab: 'kindred',
      ddragon: 'Kindred',
      cdragon: 203,
      wiki: 'Kindred',
      universe: 'Kindred',
    },
  },
  {
    name: 'Kled',
    title: 'the Cantankerous Cavalier',
    roles: ['Fighter', 'Tank'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Kled.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kled_0.jpg',
    abilities: [
      {
        name: 'Skaarl, the Cowardly Lizard',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Kled_P.png',
        description:
          "Kled rides his trusty steed, Skaarl, who takes damage for him. When Skaarl's health depletes, Kled dismounts.<br><br>While dismounted, Kled's abilities change and he deals less damage to champions. Kled can restore Skaarl's courage by fighting enemies. At maximum courage, Kled remounts with a portion of Skaarl's health.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0240/ability_0240_P1.webm',
      },
      {
        name: 'Bear Trap on a Rope',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KledQ.png',
        description:
          'Kled throws a bear trap that damages and hooks an enemy champion. If shackled for a short duration, the target takes additional physical damage and is yanked toward Kled.<br><br>When dismounted, this ability is replaced by Pocket Pistol, a ranged gun blast that knocks back Kled and restores courage.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0240/ability_0240_Q1.webm',
      },
      {
        name: 'Violent Tendencies',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KledW.png',
        description:
          'Kled gains massive attack speed for four attacks. The fourth attack deals more damage.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0240/ability_0240_W1.webm',
      },
      {
        name: 'Jousting',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KledE.png',
        description:
          'Kled dashes, dealing physical damage and gaining a short burst of speed. Kled can cast this ability again to dash back through his initial target, dealing the same damage.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0240/ability_0240_E1.webm',
      },
      {
        name: 'Chaaaaaaaarge!!!',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KledR.png',
        description:
          'Kled and Skaarl charge to a location, leaving a speed-granting trail behind them and gaining a shield. Skaarl locks onto and rams the first enemy champion encountered.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0240/ability_0240_R1.webm',
      },
    ],
    lanes: ['Top'],
    releaseDate: '2016-08-10',
    resource: 'Courage',
    rangeType: 'Melee',
    releasePatch: 'V6.16',
    attackRange: 125,
    region: 'Noxus',
    species: 'Yordle',
    ratings: {
      damage: 3,
      toughness: 2,
      control: 1,
      mobility: 3,
      utility: 1,
      difficulty: 2,
      style: 30,
      damageBreakdown: {
        magic: 2.4,
        physical: 95,
        true_: 2.6,
      },
    },
    spotlightVideoID: 'Pz145kVa-4w',
    tagArrays: [
      [4, 1, 26, 32, 33, 39, 64, 69, 71],
      [],
      [78, 80, 83, 82, 101],
      [93, 98],
      [78, 84, 83, 82, 91, 101],
      [78, 80, 83, 82, 103],
    ],
    ids: {
      kebab: 'kled',
      ddragon: 'Kled',
      cdragon: 240,
      wiki: 'Kled',
      universe: 'Kled',
    },
  },
  {
    name: "Kog'Maw",
    title: 'the Mouth of the Abyss',
    roles: ['Mage', 'Marksman'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/KogMaw.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/KogMaw_0.jpg',
    abilities: [
      {
        name: 'Icathian Surprise',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/KogMaw_IcathianSurprise.png',
        description:
          '4 seconds after dying, Kogmaw explodes, dealing true damage to surrounding enemies.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0096/ability_0096_P1.webm',
      },
      {
        name: 'Caustic Spittle',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KogMawQ.png',
        description:
          "Kog'Maw launches a corrosive projectile which deals magic damage and corrodes the target's armor and magic resist for a short time. Kog'Maw also gains additional attack speed.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0096/ability_0096_Q1.webm',
      },
      {
        name: 'Bio-Arcane Barrage',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KogMawBioArcaneBarrage.png',
        description:
          "Kog'Maw's attacks gain range and deal a percent of the target's maximum health as magic damage.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0096/ability_0096_W1.webm',
      },
      {
        name: 'Void Ooze',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KogMawVoidOoze.png',
        description:
          "Kog'Maw launches a peculiar ooze which damages all enemies it passes through and leaves a trail which slows enemies who stand on it.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0096/ability_0096_E1.webm',
      },
      {
        name: 'Living Artillery',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/KogMawLivingArtillery.png',
        description:
          "Kog'Maw fires an artillery shell at a great distance dealing magic damage (increased significantly on low health enemies) and revealing non-stealthed targets. Additionally, multiple Living Artilleries in a short period of time cause them to cost additional Mana.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0096/ability_0096_R1.webm',
      },
    ],
    lanes: ['Bottom'],
    releaseDate: '2010-06-24',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V1.0.0.94',
    attackRange: 500,
    region: 'Void',
    species: 'Voidborn',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 1,
      mobility: 1,
      utility: 1,
      difficulty: 2,
      style: 10,
      damageBreakdown: {
        magic: 55.6,
        physical: 35,
        true_: 9.3,
      },
    },
    spotlightVideoID: '_uZ1ltl-qPM',
    tagArrays: [[26, 32, 48, 67, 68], [], [101], [53, 99], [101], [103]],
    ids: {
      kebab: 'kog-maw',
      ddragon: 'KogMaw',
      cdragon: 96,
      wiki: "Kog'Maw",
      universe: 'KogMaw',
    },
  },
  {
    name: 'LeBlanc',
    title: 'the Deceiver',
    roles: ['Assassin', 'Mage'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Leblanc.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leblanc_0.jpg',
    abilities: [
      {
        name: 'Mirror Image',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/LeBlancP.png',
        description:
          'When LeBlanc drops below 40% Health, she becomes invisible for 1 second and creates a Mirror Image that deals no damage and lasts for up to 8 seconds.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0007/ability_0007_P1.webm',
      },
      {
        name: 'Sigil of Malice',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/LeblancQ.png',
        description:
          'LeBlanc projects a sigil, dealing damage and marking the target for 3.5 seconds. Damaging the marked target with an ability detonates the sigil, dealing additional damage.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0007/ability_0007_Q1.webm',
      },
      {
        name: 'Distortion',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/LeblancW.png',
        description:
          'LeBlanc dashes to a location, dealing damage to enemies near her destination. For the next 4 seconds, activate Distortion again to return LeBlanc to her starting location.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0007/ability_0007_W1.webm',
      },
      {
        name: 'Ethereal Chains',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/LeblancE.png',
        description:
          'LeBlanc launches a chain that shackles the first enemy hit. If the target remains shackled for 1.5 seconds, LeBlanc roots them and deals additional damage.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0007/ability_0007_E1.webm',
      },
      {
        name: 'Mimic',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/LeblancR.png',
        description:
          'LeBlanc casts a mimicked version of one of her basic spells.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0007/ability_0007_R1.webm',
      },
    ],
    lanes: ['Middle'],
    releaseDate: '2010-11-02',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V1.0.0.104',
    attackRange: 525,
    region: 'Noxus',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 2,
      mobility: 3,
      utility: 1,
      difficulty: 2,
      style: 100,
      damageBreakdown: {
        magic: 91.1,
        physical: 7.9,
        true_: 1,
      },
    },
    spotlightVideoID: 'we5LawDUcCM',
    tagArrays: [
      [67, 68],
      [],
      [102],
      [78, 81, 83, 82, 91, 103],
      [80, 27, 101],
      [75, 78, 80, 81, 83, 82, 27, 91],
    ],
    ids: {
      kebab: 'leblanc',
      ddragon: 'Leblanc',
      cdragon: 7,
      wiki: 'LeBlanc',
      universe: 'Leblanc',
    },
  },
  {
    name: 'Lee Sin',
    title: 'the Blind Monk',
    roles: ['Fighter', 'Assassin'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/LeeSin.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_0.jpg',
    abilities: [
      {
        name: 'Flurry',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/LeeSinPassive.png',
        description:
          'After Lee Sin uses an ability, his next 2 basic attacks gain Attack Speed and return Energy.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0064/ability_0064_P1.webm',
      },
      {
        name: 'Sonic Wave / Resonating Strike',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/BlindMonkQOne.png',
        description:
          "Sonic Wave: Lee Sin projects a discordant wave of sound to locate his enemies, dealing physical damage to the first enemy it encounters. If Sonic Wave hits, Lee Sin can cast Resonating Strike for the next 3 seconds.<br>Resonating Strike: Lee Sin dashes to the enemy hit by Sonic Wave, dealing physical damage based on the target's missing Health.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0064/ability_0064_Q1.webm',
      },
      {
        name: 'Safeguard / Iron Will',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/BlindMonkWOne.png',
        description:
          "Safeguard: Lee Sin rushes to target ally, shielding himself from damage. If the ally is a champion, they are also shielded. After using Safeguard, Lee Sin can cast Iron Will for the next 3 seconds.<br>Iron Will: Lee Sin's intense training allows him to thrive in battle. For 4 seconds, Lee Sin gains Life Steal and Spell Vamp.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0064/ability_0064_W1.webm',
      },
      {
        name: 'Tempest / Cripple',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/BlindMonkEOne.png',
        description:
          'Tempest: Lee Sin smashes the ground, sending out a shockwave that deals magic damage and reveals enemy units hit. If Tempest hits an enemy, Lee Sin can cast cripple for the next 3 seconds.<br>Cripple: Lee Sin cripples nearby enemies damaged by Tempest, reducing their Move Speed for 4 seconds. Move Speed recovers gradually over the duration.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0064/ability_0064_E1.webm',
      },
      {
        name: "Dragon's Rage",
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/BlindMonkRKick.png',
        description:
          'Lee Sin performs a powerful roundhouse kick launching his target back, dealing physical damage to the target and any enemies they collide with. Enemies the target collides with are knocked into the air for a short duration. This technique was taught to him by Jesse Perring, although Lee Sin does not kick players off the map.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0064/ability_0064_R1.webm',
      },
    ],
    lanes: ['Jungle'],
    releaseDate: '2011-04-01',
    resource: 'Energy',
    rangeType: 'Melee',
    releasePatch: 'V1.0.0.114',
    attackRange: 125,
    region: 'Ionia',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 2,
      control: 2,
      mobility: 3,
      utility: 1,
      difficulty: 2,
      style: 55,
      damageBreakdown: {
        magic: 19.1,
        physical: 78.3,
        true_: 2.6,
      },
    },
    spotlightVideoID: 'e6SleHuJjLo',
    tagArrays: [
      [4, 5, 26, 63, 69],
      [],
      [78, 83, 82, 91, 101],
      [78, 83, 82, 91, 102],
      [91, 99],
      [80, 27, 102],
    ],
    ids: {
      kebab: 'lee-sin',
      ddragon: 'LeeSin',
      cdragon: 64,
      wiki: 'Lee_Sin',
      universe: 'LeeSin',
    },
  },
  {
    name: 'Leona',
    title: 'the Radiant Dawn',
    roles: ['Tank', 'Support'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Leona.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leona_0.jpg',
    abilities: [
      {
        name: 'Sunlight',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/LeonaSunlight.png',
        description:
          'Damaging spells afflict enemies with Sunlight for 1.5 seconds. When allied Champions deal damage to those targets, they consume the Sunlight to deal additional magic damage.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0089/ability_0089_P1.webm',
      },
      {
        name: 'Shield of Daybreak',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/LeonaShieldOfDaybreak.png',
        description:
          'Leona uses her shield to perform her next basic attack, dealing bonus magic damage and stunning the target.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0089/ability_0089_Q1.webm',
      },
      {
        name: 'Eclipse',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/LeonaSolarBarrier.png',
        description:
          'Leona raises her shield to gain Damage Reduction, Armor, and Magic Resist. When the duration first ends, if there are nearby enemies, she will deal magic damage to them and prolong the duration of the effect.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0089/ability_0089_W1.webm',
      },
      {
        name: 'Zenith Blade',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/LeonaZenithBlade.png',
        description:
          'Leona projects a solar image of her sword, dealing magic damage to all enemies in a line. When the image fades, the last enemy champion struck will be briefly immobilized and Leona will dash to them.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0089/ability_0089_E1.webm',
      },
      {
        name: 'Solar Flare',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/LeonaSolarFlare.png',
        description:
          'Leona calls down a beam of solar energy, dealing damage to enemies in an area. Enemies in the center of the area are stunned, while enemies on the outside are slowed.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0089/ability_0089_R1.webm',
      },
    ],
    lanes: ['Support'],
    releaseDate: '2011-07-13',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V1.0.0.121',
    attackRange: 125,
    region: 'Targon',
    species: 'Aspect Host',
    ratings: {
      damage: 1,
      toughness: 3,
      control: 3,
      mobility: 1,
      utility: 1,
      difficulty: 1,
      style: 90,
      damageBreakdown: {
        magic: 59.2,
        physical: 25.1,
        true_: 15.7,
      },
    },
    spotlightVideoID: 'oViu5Pv_wwY',
    tagArrays: [
      [26, 2, 67, 69],
      [],
      [53, 80, 99],
      [99],
      [78, 80, 83, 82, 27, 101],
      [80, 103],
    ],
    ids: {
      kebab: 'leona',
      ddragon: 'Leona',
      cdragon: 89,
      wiki: 'Leona',
      universe: 'Leona',
    },
  },
  {
    name: 'Lillia',
    title: 'the Bashful Bloom',
    roles: ['Fighter', 'Mage'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Lillia.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lillia_0.jpg',
    abilities: [
      {
        name: 'Dream-Laden Bough',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Lillia_Icon_Passive.Lillia.png',
        description:
          'Hitting a champion or monster with a skill will deal additional max Health damage over time.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0876/ability_0876_P1.webm',
      },
      {
        name: 'Blooming Blows',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/LilliaQ.png',
        description:
          'Passively, Lillia gains stacking Move Speed when hitting enemies with spells. She can activate this to deal magic damage to nearby enemies, dealing extra true damage on the edge.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0876/ability_0876_Q1.webm',
      },
      {
        name: 'Watch Out! Eep!',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/LilliaW.png',
        description:
          'Lillia deals damage in a nearby area, dealing heavy damage in the center.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0876/ability_0876_W1.webm',
      },
      {
        name: 'Swirlseed',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/LilliaE.png',
        description:
          "Lillia hurls a seed that damages and slows those it lands on. If it doesn't hit anything, it will continue rolling until it hits a wall or target.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0876/ability_0876_E1.webm',
      },
      {
        name: 'Lilting Lullaby',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/LilliaR.png',
        description:
          'Lillia causes all enemies with Dream Dust on them to become Drowsy before falling asleep. Those enemies will take extra damage on being forcibly woken up.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0876/ability_0876_R1.webm',
      },
    ],
    lanes: ['Jungle'],
    releaseDate: '2020-07-22',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V10.15',
    attackRange: 325,
    region: 'Ionia',
    species: 'Spirit',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 2,
      mobility: 2,
      utility: 2,
      difficulty: 3,
      style: 80,
      damageBreakdown: {
        magic: 70.3,
        physical: 3.4,
        true_: 26.3,
      },
    },
    spotlightVideoID: 'lJqGoqNXuGo',
    tagArrays: [
      [26, 67, 68],
      [],
      [78, 99],
      [78, 84, 82, 103],
      [101],
      [80, 24, 25, 100],
    ],
    ids: {
      kebab: 'lillia',
      ddragon: 'Lillia',
      cdragon: 876,
      wiki: 'Lillia',
      universe: 'Lillia',
    },
  },
  {
    name: 'Lissandra',
    title: 'the Ice Witch',
    roles: ['Mage'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Lissandra.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lissandra_0.jpg',
    abilities: [
      {
        name: 'Iceborn Subjugation',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Lissandra_Passive.png',
        description:
          'When an enemy champion dies near Lissandra they become a Frozen Thrall. Frozen Thralls slow nearby enemies and then, after a delay, shatter from the intense cold, dealing magic damage to nearby targets.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0127/ability_0127_P1.webm',
      },
      {
        name: 'Ice Shard',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/LissandraQ.png',
        description:
          'Throws a spear of ice that shatters when it hits an enemy, dealing magic damage and slowing Movement Speed. Shards pass through the target, dealing the same damage to other enemies hit.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0127/ability_0127_Q1.webm',
      },
      {
        name: 'Ring of Frost',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/LissandraW.png',
        description:
          'Freezes nearby enemies in ice, dealing magic damage and rooting them.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0127/ability_0127_W1.webm',
      },
      {
        name: 'Glacial Path',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/LissandraE.png',
        description:
          "Lissandra creates an ice claw that deals magic damage. Reactivating this ability transports Lissandra to the claw's current location.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0127/ability_0127_E1.webm',
      },
      {
        name: 'Frozen Tomb',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/LissandraR.png',
        description:
          'If cast on an enemy champion, the target is frozen solid, stunning it. If cast on Lissandra, she encases herself in dark ice, healing herself while becoming untargetable and invulnerable. Dark ice then emanates from the target dealing magic damage to enemies and slowing Movement Speed.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0127/ability_0127_R1.webm',
      },
    ],
    lanes: ['Middle'],
    releaseDate: '2013-04-30',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V3.6',
    attackRange: 550,
    region: 'Freljord',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 3,
      mobility: 2,
      utility: 1,
      difficulty: 2,
      style: 100,
      damageBreakdown: {
        magic: 90.9,
        physical: 8.6,
        true_: 0.5,
      },
    },
    spotlightVideoID: 'xsCp5lBceTA',
    tagArrays: [
      [26, 2, 67, 68],
      [88],
      [101],
      [80, 27, 99],
      [91, 101],
      [80, 8, 28, 102],
    ],
    ids: {
      kebab: 'lissandra',
      ddragon: 'Lissandra',
      cdragon: 127,
      wiki: 'Lissandra',
      universe: 'Lissandra',
    },
  },
  {
    name: 'Lucian',
    title: 'the Purifier',
    roles: ['Marksman'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Lucian.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lucian_0.jpg',
    abilities: [
      {
        name: 'Lightslinger',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Lucian_Passive.png',
        description:
          'Whenever Lucian uses an ability, his next attack becomes a double-shot. When Lucian is empowered by another Ally, his next 2 basic attacks will deal bonus magic damage.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0236/ability_0236_P1.webm',
      },
      {
        name: 'Piercing Light',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/LucianQ.png',
        description: 'Lucian shoots a bolt of piercing light through a target.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0236/ability_0236_Q1.webm',
      },
      {
        name: 'Ardent Blaze',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/LucianW.png',
        description:
          'Lucian shoots a missile that explodes in a star shape, marking and briefly revealing enemies. Lucian gains Movement Speed for attacking marked enemies.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0236/ability_0236_W1.webm',
      },
      {
        name: 'Relentless Pursuit',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/LucianE.png',
        description:
          "Lucian quickly dashes a short distance. Lightslinger attacks reduce Relentless Pursuit's cooldown.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0236/ability_0236_E1.webm',
      },
      {
        name: 'The Culling',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/LucianR.png',
        description: 'Lucian unleashes a torrent of shots from his weapons.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0236/ability_0236_R1.webm',
      },
    ],
    lanes: ['Bottom'],
    releaseDate: '2013-08-22',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V3.10a',
    attackRange: 500,
    region: 'Blessed Isles',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 1,
      mobility: 3,
      utility: 1,
      difficulty: 2,
      style: 30,
      damageBreakdown: {
        magic: 11.6,
        physical: 85.9,
        true_: 2.5,
      },
    },
    spotlightVideoID: '2rIiuLXXGEg',
    tagArrays: [[67, 68], [53], [102], [101], [78, 83, 82, 101], [89, 101]],
    ids: {
      kebab: 'lucian',
      ddragon: 'Lucian',
      cdragon: 236,
      wiki: 'Lucian',
      universe: 'Lucian',
    },
  },
  {
    name: 'Lulu',
    title: 'the Fae Sorceress',
    roles: ['Mage', 'Support'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Lulu.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lulu_0.jpg',
    abilities: [
      {
        name: 'Pix, Faerie Companion',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Lulu_PixFaerieCompanion.png',
        description:
          "Pix fires magical bolts of energy whenever the champion he's following attacks another enemy unit. These bolts are homing, but can be intercepted by other units.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0117/ability_0117_P1.webm',
      },
      {
        name: 'Glitterlance',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/LuluQ.png',
        description:
          'Pix and Lulu each fire a bolt of magical energy that damages and heavily slows all enemies it hits.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0117/ability_0117_Q1.webm',
      },
      {
        name: 'Whimsy',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/LuluW.png',
        description:
          "If cast on an ally, grants them Attack Speed and Movement Speed for a short time. If cast on an enemy, turns them into an adorable critter that can't attack or cast spells.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0117/ability_0117_W1.webm',
      },
      {
        name: 'Help, Pix!',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/LuluE.png',
        description:
          'If cast on an ally, commands Pix to jump to an ally and shield them. He then follows them and aids their attacks. If cast on an enemy, commands Pix to jump to an enemy and damage them. He then follows them and grants you vision of that enemy.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0117/ability_0117_E1.webm',
      },
      {
        name: 'Wild Growth',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/LuluR.png',
        description:
          'Lulu enlarges an ally, knocking nearby enemies into the air and granting the ally a large amount of bonus health. For the next few seconds, that ally gains an aura that slows nearby enemies.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0117/ability_0117_R1.webm',
      },
    ],
    lanes: ['Support'],
    releaseDate: '2012-03-20',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V1.0.0.136',
    attackRange: 550,
    region: 'Bandle City',
    species: 'Yordle',
    ratings: {
      damage: 2,
      toughness: 1,
      control: 2,
      mobility: 1,
      utility: 3,
      difficulty: 2,
      style: 80,
      damageBreakdown: {
        magic: 82.3,
        physical: 15.3,
        true_: 2.4,
      },
    },
    spotlightVideoID: 'R1Gs1D2rUIM',
    tagArrays: [
      [5, 26, 67, 68],
      [53],
      [101],
      [10, 23, 102],
      [102],
      [70, 80, 102],
    ],
    ids: {
      kebab: 'lulu',
      ddragon: 'Lulu',
      cdragon: 117,
      wiki: 'Lulu',
      universe: 'Lulu',
    },
  },
  {
    name: 'Lux',
    title: 'the Lady of Luminosity',
    roles: ['Mage', 'Support'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Lux.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg',
    abilities: [
      {
        name: 'Illumination',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/LuxIlluminatingFraulein.png',
        description:
          "Lux's damaging spells charge the target with energy for a few seconds. Lux's next attack ignites the energy, dealing bonus magic damage (depending on Lux's level) to the target.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0099/ability_0099_P1.webm',
      },
      {
        name: 'Light Binding',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/LuxLightBinding.png',
        description:
          'Lux releases a sphere of light that binds and deals damage to up to two enemy units.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0099/ability_0099_Q1.webm',
      },
      {
        name: 'Prismatic Barrier',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/LuxPrismaticWave.png',
        description:
          'Lux throws her wand and bends the light around any friendly target it touches, protecting them from enemy damage.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0099/ability_0099_W1.webm',
      },
      {
        name: 'Lucent Singularity',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/LuxLightStrikeKugel.png',
        description:
          'Fires an anomaly of twisted light to an area, which slows nearby enemies. Lux can detonate it to damage enemies in the area of effect.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0099/ability_0099_E1.webm',
      },
      {
        name: 'Final Spark',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/LuxR.png',
        description:
          "After gathering energy, Lux fires a beam of light that deals damage to all targets in the area. In addition, triggers Lux's passive ability and refreshes the Illumination debuff duration.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0099/ability_0099_R1.webm',
      },
    ],
    lanes: ['Support', 'Middle'],
    releaseDate: '2010-10-19',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V1.0.0.103',
    attackRange: 550,
    region: 'Demacia',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 2,
      mobility: 1,
      utility: 2,
      difficulty: 1,
      style: 90,
      damageBreakdown: {
        magic: 92.8,
        physical: 5.3,
        true_: 1.9,
      },
    },
    spotlightVideoID: 'pJB6JWDESWU',
    tagArrays: [[26, 67, 68, 77], [53], [80, 27, 101], [101], [103], [97, 101]],
    ids: {
      kebab: 'lux',
      ddragon: 'Lux',
      cdragon: 99,
      wiki: 'Lux',
      universe: 'Lux',
    },
  },
  {
    name: 'Malphite',
    title: 'Shard of the Monolith',
    roles: ['Fighter', 'Tank'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Malphite.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malphite_0.jpg',
    abilities: [
      {
        name: 'Granite Shield',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Malphite_GraniteShield.png',
        description:
          'Malphite is shielded by a layer of rock which absorbs damage up to 10% of his maximum Health. If Malphite has not been hit for a few seconds, this effect recharges.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0054/ability_0054_P1.webm',
      },
      {
        name: 'Seismic Shard',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SeismicShard.png',
        description:
          'Malphite sends a shard of the earth through the ground at his foe, dealing damage upon impact and stealing Movement Speed for 3 seconds.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0054/ability_0054_Q1.webm',
      },
      {
        name: 'Thunderclap',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/Obduracy.png',
        description:
          'Malphite attacks with such force that it creates a sonic boom. For the next few seconds, his attacks create aftershocks in front of him.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0054/ability_0054_W1.webm',
      },
      {
        name: 'Ground Slam',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/Landslide.png',
        description:
          'Malphite slams the ground, sending out a shockwave that deals magic damage based on his Armor and reduces the Attack Speed of enemies for a short duration.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0054/ability_0054_E1.webm',
      },
      {
        name: 'Unstoppable Force',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/UFSlash.png',
        description:
          'Malphite launches himself to a location at high speed, damaging enemies and knocking them into the air.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0054/ability_0054_R1.webm',
      },
    ],
    lanes: ['Top'],
    releaseDate: '2009-09-02',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V0.9.22.16',
    attackRange: 125,
    region: 'Ixtal',
    species: 'Golem',
    ratings: {
      damage: 1,
      toughness: 3,
      control: 3,
      mobility: 1,
      utility: 1,
      difficulty: 1,
      style: 75,
      damageBreakdown: {
        magic: 78.8,
        physical: 20.7,
        true_: 0.5,
      },
    },
    tagArrays: [
      [5, 26, 34, 67, 69],
      [],
      [102],
      [53, 99],
      [9, 99],
      [78, 79, 83, 82, 103],
    ],
    ids: {
      kebab: 'malphite',
      ddragon: 'Malphite',
      cdragon: 54,
      wiki: 'Malphite',
      universe: 'Malphite',
    },
    spotlightVideoID: 'iQmYyqiY17c',
  },
  {
    name: 'Malzahar',
    title: 'the Prophet of the Void',
    roles: ['Assassin', 'Mage'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Malzahar.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malzahar_0.jpg',
    abilities: [
      {
        name: 'Void Shift',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Malzahar_Passive.png',
        description:
          "When he hasn't recently taken damage or been crowd controlled, Malzahar gains massive damage reduction and crowd control immunity, lingering for a short period after taking damage.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0090/ability_0090_P1.webm',
      },
      {
        name: 'Call of the Void',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/MalzaharQ.png',
        description:
          'Malzahar opens up two portals to the Void. After a short delay, they fire projectiles that deal Magic Damage and silence enemy champions.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0090/ability_0090_Q1.webm',
      },
      {
        name: 'Void Swarm',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/MalzaharW.png',
        description: 'Malzahar summons Voidlings to attack nearby enemies.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0090/ability_0090_W1.webm',
      },
      {
        name: 'Malefic Visions',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/MalzaharE.png',
        description:
          "Malzahar infects his target's mind with cruel visions of their demise, dealing damage over time. Using Malzahar's other spells on the target will refresh the visions.<br><br>If the target dies while afflicted by the visions, they pass on to a nearby enemy unit and Malzahar gains Mana. Malzahar's Voidlings are attracted to affected units.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0090/ability_0090_E1.webm',
      },
      {
        name: 'Nether Grasp',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/MalzaharR.png',
        description:
          'Malzahar channels the essence of the Void to suppress an enemy champion over a zone of damaging negative energy.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0090/ability_0090_R1.webm',
      },
    ],
    lanes: ['Middle'],
    releaseDate: '2010-06-01',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V1.0.0.86',
    attackRange: 500,
    region: 'Void',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 3,
      mobility: 1,
      utility: 2,
      difficulty: 1,
      style: 100,
      damageBreakdown: {
        magic: 96.7,
        physical: 2.6,
        true_: 0.7,
      },
    },
    spotlightVideoID: 'PC5ScnEH-Rc',
    tagArrays: [
      [33, 67, 68],
      [],
      [22, 103],
      [103],
      [95, 88, 102],
      [79, 80, 8, 29, 89, 102],
    ],
    ids: {
      kebab: 'malzahar',
      ddragon: 'Malzahar',
      cdragon: 90,
      wiki: 'Malzahar',
      universe: 'Malzahar',
    },
  },
  {
    name: 'Maokai',
    title: 'the Twisted Treant',
    roles: ['Tank', 'Mage'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Maokai.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Maokai_0.jpg',
    abilities: [
      {
        name: 'Sap Magic',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Maokai_Passive.png',
        description:
          "Maokai's basic attack also heals him on a moderate cooldown. Each time Maokai casts a spell or is struck by an enemy's spell, this cooldown is reduced.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0057/ability_0057_P1.webm',
      },
      {
        name: 'Bramble Smash',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/MaokaiQ.png',
        description:
          'Maokai knocks back nearby enemies with a shockwave, dealing magic damage and slowing them.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0057/ability_0057_Q1.webm',
      },
      {
        name: 'Twisted Advance',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/MaokaiW.png',
        description:
          'Maokai contorts into a mass of moving roots, becoming untargetable and dashing to the target. Upon arrival, he roots the target.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0057/ability_0057_W1.webm',
      },
      {
        name: 'Sapling Toss',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/MaokaiE.png',
        description:
          'Maokai flings a sapling to the target area to stand guard. More effective in brush.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0057/ability_0057_E1.webm',
      },
      {
        name: "Nature's Grasp",
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/MaokaiR.png',
        description:
          'Maokai summons a colossal wall of brambles and thorns that slowly advances forwards, damaging and rooting any enemies in the path.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0057/ability_0057_R1.webm',
      },
    ],
    lanes: ['Support'],
    releaseDate: '2011-02-16',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V1.0.0.111',
    attackRange: 125,
    region: 'Shadow Isles',
    species: 'Spirit',
    ratings: {
      damage: 1,
      toughness: 3,
      control: 3,
      mobility: 1,
      utility: 2,
      difficulty: 1,
      style: 75,
      damageBreakdown: {
        magic: 92.8,
        physical: 4,
        true_: 3.2,
      },
    },
    spotlightVideoID: 'Gw8f-VqAcQo',
    tagArrays: [
      [4, 26, 32, 67, 69],
      [55],
      [80, 101],
      [78, 80, 83, 82, 27, 102],
      [103],
      [80, 27, 101],
    ],
    ids: {
      kebab: 'maokai',
      ddragon: 'Maokai',
      cdragon: 57,
      wiki: 'Maokai',
      universe: 'Maokai',
    },
  },
  {
    name: 'Master Yi',
    title: 'the Wuju Bladesman',
    roles: ['Fighter', 'Assassin'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/MasterYi.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MasterYi_0.jpg',
    abilities: [
      {
        name: 'Double Strike',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/MasterYi_Passive1.png',
        description:
          'Every few consecutive basic attack, Master Yi strikes twice.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0011/ability_0011_P1.webm',
      },
      {
        name: 'Alpha Strike',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/AlphaStrike.png',
        description:
          "Master Yi teleports across the battlefield with blinding speed, dealing physical damage to multiple units in his path, while simultaneously becoming untargetable. Alpha Strike can critically strike and deals bonus physical damage to monsters. Basic attacks reduce Alpha Strike's cooldown.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0011/ability_0011_Q1.webm',
      },
      {
        name: 'Meditate',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/Meditate.png',
        description:
          'Master Yi rejuvenates his body by focus of mind, restoring Health and taking reduced damage for a short time. In addition, Master Yi will gain stacks of Double Strike and pause the remaining duration on Wuju Style and Highlander for each second he channels.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0011/ability_0011_W1.webm',
      },
      {
        name: 'Wuju Style',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/WujuStyle.png',
        description: 'Grants bonus true damage on basic attacks.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0011/ability_0011_E1.webm',
      },
      {
        name: 'Highlander',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/Highlander.png',
        description:
          "Master Yi moves with unparalleled agility, temporarily increasing his Move Speed and Attack Speed as well as making him immune to all slowing effects. While active, Champion kills or assists extend Highlander's duration. Passively reduces cooldown for his other abilities on a kill or assist.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0011/ability_0011_R1.webm',
      },
    ],
    lanes: ['Jungle'],
    releaseDate: '2009-02-21',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V0.1.0.2',
    attackRange: 125,
    region: 'Ionia',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 1,
      mobility: 2,
      utility: 1,
      difficulty: 1,
      style: 10,
      damageBreakdown: {
        magic: 73.5,
        physical: 5.4,
        true_: 21.1,
      },
    },
    spotlightVideoID: 'RJo0YzTyvXw',
    tagArrays: [
      [32, 36, 37, 39, 67, 69],
      [53],
      [78, 79, 81, 108, 102],
      [79, 89, 99],
      [53, 99],
      [88, 94, 99],
    ],
    ids: {
      kebab: 'master-yi',
      ddragon: 'MasterYi',
      cdragon: 11,
      wiki: 'Master_Yi',
      universe: 'MasterYi',
    },
  },
  {
    name: 'Miss Fortune',
    title: 'the Bounty Hunter',
    roles: ['Marksman'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/MissFortune.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MissFortune_0.jpg',
    abilities: [
      {
        name: 'Love Tap',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/MissFortune_W.png',
        description:
          'Miss Fortune deals bonus physical damage whenever she basic attacks a new target.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0021/ability_0021_P1.webm',
      },
      {
        name: 'Double Up',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/MissFortuneRicochetShot.png',
        description:
          'Miss Fortune fires a bullet at an enemy, damaging them and a target behind them. Both strikes can also apply Love Tap.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0021/ability_0021_Q1.webm',
      },
      {
        name: 'Strut',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/MissFortuneViciousStrikes.png',
        description:
          "Miss Fortune passively gains Movement Speed when not attacked. This ability can be activated to grant bonus Attack Speed for a short duration. While it's on cooldown, Love Taps reduce the remaining cooldown of Strut.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0021/ability_0021_W1.webm',
      },
      {
        name: 'Make It Rain',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/MissFortuneScattershot.png',
        description:
          'Miss Fortune reveals an area with a flurry of bullets, dealing waves of damage to opponents and slowing them.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0021/ability_0021_E1.webm',
      },
      {
        name: 'Bullet Time',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/MissFortuneBulletTime.png',
        description:
          'Miss Fortune channels a barrage of bullets into a cone in front of her, dealing large amounts of damage to enemies. Each wave of Bullet Time can critically strike',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0021/ability_0021_R1.webm',
      },
    ],
    lanes: ['Bottom'],
    releaseDate: '2010-09-08',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V1.0.0.100',
    attackRange: 550,
    region: 'Bilgewater',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 1,
      mobility: 1,
      utility: 1,
      difficulty: 1,
      style: 30,
      damageBreakdown: {
        magic: 10.3,
        physical: 85.5,
        true_: 4.2,
      },
    },
    spotlightVideoID: 'vZh_hN-62YA',
    tagArrays: [[26, 67, 68, 77], [53], [102], [99], [103], [79, 89, 101]],
    ids: {
      kebab: 'miss-fortune',
      ddragon: 'MissFortune',
      cdragon: 21,
      wiki: 'Miss_Fortune',
      universe: 'MissFortune',
    },
  },
  {
    name: 'Mordekaiser',
    title: 'the Iron Revenant',
    roles: ['Fighter'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Mordekaiser.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Mordekaiser_0.jpg',
    abilities: [
      {
        name: 'Darkness Rise',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/MordekaiserPassive.png',
        description:
          'Mordekaiser gains a powerful damage aura and Move Speed after landing 3 attacks or spells against champions or monsters.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0082/ability_0082_P1.webm',
      },
      {
        name: 'Obliterate',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/MordekaiserQ.png',
        description:
          'Mordekaiser smashes the ground with his mace dealing damage to each enemy struck. Damage is increased when hitting a single enemy.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0082/ability_0082_Q1.webm',
      },
      {
        name: 'Indestructible',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/MordekaiserW.png',
        description:
          'Mordekaiser stores damage he deals and takes to create a shield. He may consume the shield to heal.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0082/ability_0082_W1.webm',
      },
      {
        name: "Death's Grasp",
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/MordekaiserE.png',
        description: 'Mordekaiser pulls all enemies in an area.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0082/ability_0082_E1.webm',
      },
      {
        name: 'Realm of Death',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/MordekaiserR.png',
        description:
          'Mordekaiser drags his victim to a different dimension with him and steals a portion of their stats. If he kills them, he keeps the stats until the victim respawns.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0082/ability_0082_R1.webm',
      },
    ],
    lanes: ['Jungle', 'Top'],
    releaseDate: '2010-02-24',
    resource: 'Shield',
    rangeType: 'Melee',
    releasePatch: 'V1.0.0.75',
    attackRange: 175,
    region: 'Noxus',
    species: 'Revenant',
    ratings: {
      damage: 3,
      toughness: 2,
      control: 1,
      mobility: 1,
      utility: 2,
      difficulty: 2,
      style: 80,
      damageBreakdown: {
        magic: 81.9,
        physical: 12.4,
        true_: 5.7,
      },
    },
    spotlightVideoID: 'GcR1_McnJbU',
    tagArrays: [
      [1, 26, 39, 66, 69],
      [53, 104],
      [101],
      [91, 99],
      [80, 101],
      [70, 29, 88, 102],
    ],
    ids: {
      kebab: 'mordekaiser',
      ddragon: 'Mordekaiser',
      cdragon: 82,
      wiki: 'Mordekaiser',
      universe: 'Mordekaiser',
    },
  },
  {
    name: 'Morgana',
    title: 'the Fallen',
    roles: ['Mage', 'Support'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Morgana.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Morgana_0.jpg',
    abilities: [
      {
        name: 'Soul Siphon',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/FallenAngel_Empathize.png',
        description:
          'Morgana drains spirit from her enemies, healing as she deals damage to champions, large minions, and medium and larger jungler monsters.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0025/ability_0025_P1.webm',
      },
      {
        name: 'Dark Binding',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/MorganaQ.png',
        description:
          "Morgana binds an enemy in place with dark magic, forcing them to feel the pain they've caused and dealing magic damage. ",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0025/ability_0025_Q1.webm',
      },
      {
        name: 'Tormented Shadow',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/MorganaW.png',
        description:
          'Morgana casts a cursed shadow on an area, damaging enemies who dare stand in her dark circle. They receive magic damage over time, which increases the lower health they are.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0025/ability_0025_W1.webm',
      },
      {
        name: 'Black Shield',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/MorganaE.png',
        description:
          'Morgana anoints an ally with a protective barrier of starfire, which absorbs magical damage and disabling effects until it is broken.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0025/ability_0025_E1.webm',
      },
      {
        name: 'Soul Shackles',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/MorganaR.png',
        description:
          'Morgana unleashes the full force of her Celestial power as she unbinds her wings and hovers above the ground. She lashes chains of dark pain onto nearby enemy champions, gaining Move Speed towards them. The chains slow and deal initial damage and, after a delay, stun those who are unable to break them.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0025/ability_0025_R1.webm',
      },
    ],
    lanes: ['Support'],
    releaseDate: '2009-02-21',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V0.1.0.2',
    attackRange: 450,
    region: 'Targon',
    species: 'Human',
    ratings: {
      damage: 2,
      toughness: 1,
      control: 3,
      mobility: 1,
      utility: 2,
      difficulty: 1,
      style: 100,
      damageBreakdown: {
        magic: 87.8,
        physical: 5.4,
        true_: 6.8,
      },
    },
    spotlightVideoID: 'IqJAvwCmoF0',
    tagArrays: [
      [26, 2, 33, 67, 68],
      [],
      [80, 27, 101],
      [103],
      [102],
      [80, 100],
    ],
    ids: {
      kebab: 'morgana',
      ddragon: 'Morgana',
      cdragon: 25,
      wiki: 'Morgana',
      universe: 'Morgana',
    },
  },
  {
    name: 'Nami',
    title: 'the Tidecaller',
    roles: ['Mage', 'Support'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Nami.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nami_0.jpg',
    abilities: [
      {
        name: 'Surging Tides',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/NamiPassive.png',
        description:
          "When Nami's Abilities hit allied champions they gain Movement Speed for a short duration.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0267/ability_0267_P1.webm',
      },
      {
        name: 'Aqua Prison',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/NamiQ.png',
        description:
          'Sends a bubble to a target area, dealing damage and stunning all enemies on impact.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0267/ability_0267_Q1.webm',
      },
      {
        name: 'Ebb and Flow',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/NamiW.png',
        description:
          'Unleashes a stream of water that bounces back and forth between allied and enemy champions, healing allies and damaging enemies.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0267/ability_0267_W1.webm',
      },
      {
        name: "Tidecaller's Blessing",
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/NamiE.png',
        description:
          "Empowers an allied champion for a short duration. The ally's basic attacks and spells deal bonus magic damage and slow the target.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0267/ability_0267_E1.webm',
      },
      {
        name: 'Tidal Wave',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/NamiR.png',
        description:
          'Summons a massive Tidal Wave that knocks up, slows, and damages enemies. Allies hit gain double the effect of Surging Tides.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0267/ability_0267_R1.webm',
      },
    ],
    lanes: ['Support'],
    releaseDate: '2012-12-07',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V1.0.0.152',
    attackRange: 550,
    region: 'Runeterra',
    species: 'Vastayan',
    ratings: {
      damage: 1,
      toughness: 1,
      control: 3,
      mobility: 1,
      utility: 2,
      difficulty: 2,
      style: 90,
      damageBreakdown: {
        magic: 82.2,
        physical: 10.3,
        true_: 7.5,
      },
    },
    spotlightVideoID: 'wd_Sz59QTVk',
    tagArrays: [[5, 26, 67, 68], [], [80, 103], [102], [53, 102], [80, 101]],
    ids: {
      kebab: 'nami',
      ddragon: 'Nami',
      cdragon: 267,
      wiki: 'Nami',
      universe: 'Nami',
    },
  },
  {
    name: 'Nasus',
    title: 'the Curator of the Sands',
    roles: ['Fighter', 'Tank'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Nasus.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nasus_0.jpg',
    abilities: [
      {
        name: 'Soul Eater',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Nasus_Passive.png',
        description:
          "Nasus drains his foe's spiritual energy, giving him bonus Life Steal.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0075/ability_0075_P1.webm',
      },
      {
        name: 'Siphoning Strike',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/NasusQ.png',
        description:
          'Nasus strikes his foe, dealing damage and increasing the power of his future Siphoning Strikes if he slays his target.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0075/ability_0075_Q1.webm',
      },
      {
        name: 'Wither',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/NasusW.png',
        description:
          'Nasus ages an enemy champion, decelerating their Move Speed and Attack Speed over time.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0075/ability_0075_W1.webm',
      },
      {
        name: 'Spirit Fire',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/NasusE.png',
        description:
          'Nasus unleashes a spirit flame at a location, dealing damage and reducing the Armor of enemies who stand on it.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0075/ability_0075_E1.webm',
      },
      {
        name: 'Fury of the Sands',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/NasusR.png',
        description:
          'Nasus unleashes a mighty sandstorm that batters nearby enemies. While the storm rages, he gains increased Health, Attack Range, damages nearby enemies, has a reduced cooldown on Siphoning Strike, and gains bonus Armor and Magic Resistance.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0075/ability_0075_R1.webm',
      },
    ],
    lanes: ['Top'],
    releaseDate: '2009-10-01',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V0.9.25.24',
    attackRange: 125,
    region: 'Shurima',
    species: 'God-Warrior',
    ratings: {
      damage: 2,
      toughness: 3,
      control: 2,
      mobility: 1,
      utility: 1,
      difficulty: 1,
      style: 20,
      damageBreakdown: {
        magic: 42.7,
        physical: 56.5,
        true_: 0.8,
      },
    },
    tagArrays: [[26, 67, 69], [], [53, 73, 88, 99], [9, 102], [103], [70, 99]],
    ids: {
      kebab: 'nasus',
      ddragon: 'Nasus',
      cdragon: 75,
      wiki: 'Nasus',
      universe: 'Nasus',
    },
    spotlightVideoID: 'pnbtna-Qvns',
  },
  {
    name: 'Nautilus',
    title: 'the Titan of the Depths',
    roles: ['Fighter', 'Tank'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Nautilus.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nautilus_0.jpg',
    abilities: [
      {
        name: 'Staggering Blow',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Nautilus_StaggeringBlow.png',
        description:
          "Nautilus' first Attack against a target deals increased physical damage and roots them briefly.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0111/ability_0111_P1.webm',
      },
      {
        name: 'Dredge Line',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/NautilusAnchorDrag.png',
        description:
          'Nautilus hurls his anchor forward.  Colliding with an enemy pulls them and Nautilus together, dealing magic damage.  Colliding with terrain pulls Nautilus towards it.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0111/ability_0111_Q1.webm',
      },
      {
        name: "Titan's Wrath",
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/NautilusPiercingGaze.png',
        description:
          'Nautilus gains a temporary Shield.  While it persists, his Attacks deal damage over time to his target and surrounding enemies.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0111/ability_0111_W1.webm',
      },
      {
        name: 'Riptide',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/NautilusSplashZone.png',
        description:
          'Nautilus creates three exploding waves around himself. Each explosion damages and slows enemies.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0111/ability_0111_E1.webm',
      },
      {
        name: 'Depth Charge',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/NautilusGrandLine.png',
        description:
          'Nautilus fires a shockwave into the earth that chases an opponent. This shockwave rips up the earth above it, knocking enemies into the air. When it reaches the opponent, the shockwave erupts, knocking his target into the air and stunning them.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0111/ability_0111_R1.webm',
      },
    ],
    lanes: ['Support'],
    releaseDate: '2012-02-14',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V1.0.0.134',
    attackRange: 175,
    region: 'Bilgewater',
    species: 'Revenant',
    ratings: {
      damage: 1,
      toughness: 3,
      control: 3,
      mobility: 1,
      utility: 1,
      difficulty: 2,
      style: 80,
      damageBreakdown: {
        magic: 68.4,
        physical: 19.4,
        true_: 12.2,
      },
    },
    spotlightVideoID: 'IyOeyjwZT28',
    tagArrays: [
      [5, 1, 26, 2, 67, 69],
      [53, 80, 27],
      [78, 80, 83, 82, 27, 101],
      [54, 99],
      [99],
      [80, 102],
    ],
    ids: {
      kebab: 'nautilus',
      ddragon: 'Nautilus',
      cdragon: 111,
      wiki: 'Nautilus',
      universe: 'Nautilus',
    },
  },
  {
    name: 'Neeko',
    title: 'the Curious Chameleon',
    roles: ['Mage', 'Support'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Neeko.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Neeko_0.jpg',
    abilities: [
      {
        name: 'Inherent Glamour',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Neeko_P.png',
        description:
          'Neeko can look like an ally champion. Taking damage from enemy Champions or casting damaging spells breaks the disguise.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0518/ability_0518_P1.webm',
      },
      {
        name: 'Blooming Burst',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/NeekoQ.png',
        description:
          'Neeko throws a seed dealing magic damage. The seed blooms again on hitting champions or killing units.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0518/ability_0518_Q1.webm',
      },
      {
        name: 'Shapesplitter',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/NeekoW.png',
        description:
          'Neeko passively deals bonus magic damage every third attack. Neeko can activate to send a clone in a direction.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0518/ability_0518_W1.webm',
      },
      {
        name: 'Tangle-Barbs',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/NeekoE.png',
        description:
          'Neeko slings a tangle that damage and root everything it passes through. If the tangle kills an enemy or passes through a champion, it becomes larger, faster, and roots for longer.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0518/ability_0518_E1.webm',
      },
      {
        name: 'Pop Blossom',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/NeekoR.png',
        description:
          'After a short preparation, Neeko leaps into the air and gains a shield. Upon landing, nearby enemies are damaged and stunned. The preparation is hidden if Neeko is disguised.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0518/ability_0518_R1.webm',
      },
    ],
    lanes: ['Middle'],
    releaseDate: '2018-12-05',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V8.24',
    attackRange: 550,
    region: 'Ixtal',
    species: 'Vastayan',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 3,
      mobility: 1,
      utility: 1,
      difficulty: 1,
      style: 80,
      damageBreakdown: {
        magic: 89.5,
        physical: 8.1,
        true_: 2.5,
      },
    },
    spotlightVideoID: 'bPj48lmrynU',
    tagArrays: [
      [2, 67, 68],
      [72, 76],
      [103],
      [53, 101],
      [80, 27, 101],
      [80, 99],
    ],
    ids: {
      kebab: 'neeko',
      ddragon: 'Neeko',
      cdragon: 518,
      wiki: 'Neeko',
      universe: 'Neeko',
    },
  },
  {
    name: 'Nidalee',
    title: 'the Bestial Huntress',
    roles: ['Assassin', 'Mage'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Nidalee.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nidalee_0.jpg',
    abilities: [
      {
        name: 'Prowl',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Nidalee_Passive.png',
        description:
          "Moving through brush increases Nidalee's Movement Speed by 10% for 2 seconds, increased to 30% toward visible enemy champions within 1400 range.<br><br>Hitting champions or monsters with Javelin Toss or Bushwhack triggers a <font color='#FFF673'>Hunt</font>, granting <font color='#ee91d7'>True Sight</font> of them for 4 seconds. During this time, Nidalee gains 10% Movement Speed (increased to 30% toward the <font color='#FFF673'>Hunted</font> target) and her Takedown and Pounce are enhanced against them.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0076/ability_0076_P1.webm',
      },
      {
        name: 'Javelin Toss / Takedown',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/JavelinToss.png',
        description:
          'In human form, Nidalee throws a spiked javelin at her target that gains damage as it flies.  As a cougar, her next attack will attempt to fatally wound her target, dealing more damage the less life they have.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0076/ability_0076_Q1.webm',
      },
      {
        name: 'Bushwhack / Pounce',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/Bushwhack.png',
        description:
          'In human form, Nidalee lays a trap for unwary opponents that, when sprung, damages and reveals its target. As a cougar, she jumps in a direction, dealing damage in an area where she lands.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0076/ability_0076_W1.webm',
      },
      {
        name: 'Primal Surge / Swipe',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/PrimalSurge.png',
        description:
          'In human form, Nidalee channels the spirit of the cougar to heal her allies and imbue them with Attack Speed for a short duration. As a cougar, she claws in a direction, dealing damage to enemies in front of her.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0076/ability_0076_E1.webm',
      },
      {
        name: 'Aspect Of The Cougar',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/AspectOfTheCougar.png',
        description: 'Nidalee transforms into a cougar, gaining new abilities.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0076/ability_0076_R1.webm',
      },
    ],
    lanes: ['Jungle'],
    releaseDate: '2009-12-17',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V1.0.0.63',
    attackRange: 525,
    region: 'Ixtal',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 1,
      mobility: 3,
      utility: 2,
      difficulty: 2,
      style: 75,
      damageBreakdown: {
        magic: 91.2,
        physical: 5.2,
        true_: 3.6,
      },
    },
    spotlightVideoID: 'KZjRgm4mF_U',
    tagArrays: [[67, 68, 71], [], [52, 56], [78, 83, 82], [], [99]],
    ids: {
      kebab: 'nidalee',
      ddragon: 'Nidalee',
      cdragon: 76,
      wiki: 'Nidalee',
      universe: 'Nidalee',
    },
  },
  {
    ids: {
      cdragon: 895,
      ddragon: 'Nilah',
      kebab: 'nilah',
      universe: 'Nilah',
      wiki: 'Nilah',
    },
    name: 'Nilah',
    title: 'the Joy Unbound',
    roles: ['Fighter', 'Assassin'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/12.13.1/img/champion/Nilah.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nilah_0.jpg',
    resource: 'Mana',
    attackRange: 225,
    abilities: [
      {
        name: 'Joy Unending',
        img: 'https://ddragon.leagueoflegends.com/cdn/12.13.1/img/passive/NIlahP.Nilah.png',
        description:
          'Nilah gains increased experience from last-hitting minions along with the ability to enhance and share nearby healing and shielding from her allies.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0895/ability_0895_P1.webm',
      },
      {
        name: 'Formless Blade',
        img: 'https://ddragon.leagueoflegends.com/cdn/12.13.1/img/spell/NilahQ.png',
        description:
          'With a snap of her whip-blade, Nilah damages any enemies she hits in a straight line in her chosen direction. This action extends her attack range for a short duration.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0895/ability_0895_Q1.webm',
      },
      {
        name: 'Jubilant Veil',
        img: 'https://ddragon.leagueoflegends.com/cdn/12.13.1/img/spell/NilahW.png',
        description:
          "Nilah envelops herself in mist, increasing her movement speed and allowing her to gracefully dodge all incoming attacks. Any allies she touches during the mist's duration will also gain this effect.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0895/ability_0895_W1.webm',
      },
      {
        name: 'Slipstream',
        img: 'https://ddragon.leagueoflegends.com/cdn/12.13.1/img/spell/NilahE.png',
        description:
          'Nilah enthusiastically dashes toward her target, dealing damage to any enemies she passes through on the way.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0895/ability_0895_E1.webm',
      },
      {
        name: 'Apotheosis',
        img: 'https://ddragon.leagueoflegends.com/cdn/12.13.1/img/spell/NilahR.png',
        description:
          'Twirling her whip-blade in joyful exuberance, Nilah deals damage to enemies around her before pulling them closer with her weapon.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0895/ability_0895_R1.webm',
      },
    ],
    ratings: {
      difficulty: 3,
      style: 30,
      damage: 3,
      toughness: 1,
      control: 1,
      mobility: 3,
      utility: 2,
      damageBreakdown: {
        magic: 0,
        physical: 100,
        true_: 0,
      },
    },
    tagArrays: [[], [], [], [], [], []],
    lanes: ['Bottom'],
    releaseDate: '2022-07-13',
    releasePatch: '12.13',
    region: 'Bilgewater',
    species: 'Human',
    spotlightVideoID: '6OBgIHyPAJ8',
    rangeType: 'Melee',
  },
  {
    name: 'Nocturne',
    title: 'the Eternal Nightmare',
    roles: ['Fighter', 'Assassin'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Nocturne.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nocturne_0.jpg',
    abilities: [
      {
        name: 'Umbra Blades',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Nocturne_UmbraBlades.png',
        description:
          "Every few seconds, Nocturne's next attack strikes surrounding enemies for bonus physical damage and heals himself. <br><br>Nocturne's basic attacks reduce this cooldown.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0056/ability_0056_P1.webm',
      },
      {
        name: 'Duskbringer',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/NocturneDuskbringer.png',
        description:
          'Nocturne throws a shadow blade that deals damage, leaves a Dusk Trail, and causes champions to leave a Dusk Trail. While on the trail, Nocturne can move through units and has increased Movement Speed and Attack Damage.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0056/ability_0056_Q1.webm',
      },
      {
        name: 'Shroud of Darkness',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/NocturneShroudofDarkness.png',
        description:
          'Nocturne empowers his blades, passively gaining Attack Speed. Activating Shroud of Darkness allows Nocturne to fade into the shadows, creating a magical barrier which blocks a single enemy ability and doubles his passive Attack Speed if successful.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0056/ability_0056_W1.webm',
      },
      {
        name: 'Unspeakable Horror',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/NocturneUnspeakableHorror.png',
        description:
          "Nocturne plants a nightmare into his target's mind, dealing damage each second and applying fear to the target if they do not get out of range by the end of the duration.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0056/ability_0056_E1.webm',
      },
      {
        name: 'Paranoia',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/NocturneParanoia.png',
        description:
          'Nocturne reduces the sight radius of all enemy champions and removes their ally vision in the process. He can then launch himself at a nearby enemy champion.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0056/ability_0056_R1.webm',
      },
    ],
    lanes: ['Jungle'],
    releaseDate: '2011-03-15',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V1.0.0.113',
    attackRange: 125,
    region: 'Runeterra',
    species: 'Demon',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 2,
      mobility: 2,
      utility: 2,
      difficulty: 1,
      style: 30,
      damageBreakdown: {
        magic: 10.1,
        physical: 86.8,
        true_: 3.1,
      },
    },
    spotlightVideoID: 'owrwt97AH54',
    tagArrays: [
      [26, 34, 38, 67, 69],
      [53],
      [101],
      [99],
      [80, 13, 102],
      [78, 79, 83, 82, 21, 97, 102, 87, 99],
    ],
    ids: {
      kebab: 'nocturne',
      ddragon: 'Nocturne',
      cdragon: 56,
      wiki: 'Nocturne',
      universe: 'Nocturne',
    },
  },
  {
    name: 'Nunu & Willump',
    title: 'the Boy and His Yeti',
    roles: ['Fighter', 'Tank'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Nunu.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nunu_0.jpg',
    abilities: [
      {
        name: 'Call of the Freljord',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/NunuPassive.png',
        description:
          "Nunu increases the attack speed and movement speed of Willump and a nearby ally, and causes Willump's basic attacks to damage enemies around the target.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0020/ability_0020_P1.webm',
      },
      {
        name: 'Consume',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/NunuQ.png',
        description:
          'Willump takes a bite out of a minion, monster, or enemy champion, dealing damage and healing himself.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0020/ability_0020_Q1.webm',
      },
      {
        name: 'Biggest Snowball Ever!',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/NunuW.png',
        description:
          'Willump creates a snowball that grows in size and speed as he rolls it.  The snowball damages and knocks up enemies.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0020/ability_0020_W1.webm',
      },
      {
        name: 'Snowball Barrage',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/NunuE.png',
        description:
          "Nunu throws multiple snowballs that damage enemies.  When he's finished, Willump roots any champions or large monsters that were hit by a snowball.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0020/ability_0020_E1.webm',
      },
      {
        name: 'Absolute Zero',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/NunuR.png',
        description:
          'Nunu & Willump create a powerful blizzard in an area that slows enemies and deals massive damage at the end.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0020/ability_0020_R1.webm',
      },
    ],
    lanes: ['Jungle'],
    releaseDate: '2009-02-21',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V0.1.0.2',
    attackRange: 125,
    region: 'Freljord',
    species: 'Human',
    ratings: {
      damage: 1,
      toughness: 3,
      control: 2,
      mobility: 1,
      utility: 2,
      difficulty: 1,
      style: 80,
      damageBreakdown: {
        magic: 84.4,
        physical: 7.1,
        true_: 8.4,
      },
    },
    spotlightVideoID: 'udTIlmIa-R4',
    tagArrays: [
      [5, 1, 26, 2, 36, 67, 69],
      [],
      [88, 102],
      [80, 79, 101],
      [80, 27, 91, 101],
      [79, 99],
    ],
    ids: {
      kebab: 'nunu',
      ddragon: 'Nunu',
      cdragon: 20,
      wiki: 'Nunu',
      universe: 'Nunu',
    },
  },
  {
    name: 'Olaf',
    title: 'the Berserker',
    roles: ['Fighter', 'Tank'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Olaf.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Olaf_0.jpg',
    abilities: [
      {
        name: 'Berserker Rage',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Olaf_Passive.png',
        description: 'Olaf gains Attack Speed based on his missing Health.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0002/ability_0002_P1.webm',
      },
      {
        name: 'Undertow',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/OlafAxeThrowCast.png',
        description:
          "Olaf throws an axe into the ground at a target location, dealing damage to enemies it passes through and slowing their Move Speed. If Olaf picks up the axe, the ability's cooldown is reduced by 4.5 seconds.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0002/ability_0002_Q1.webm',
      },
      {
        name: 'Vicious Strikes',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/OlafFrenziedStrikes.png',
        description:
          "Olaf's Attack Speed is increased, he gains Life Steal and has increased healing from all sources based on how much Health he is missing.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0002/ability_0002_W1.webm',
      },
      {
        name: 'Reckless Swing',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/OlafRecklessStrike.png',
        description:
          'Olaf attacks with such force that it deals true damage to his target and himself, refunding the Health cost if he destroys the target.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0002/ability_0002_E1.webm',
      },
      {
        name: 'Ragnarok',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/OlafRagnarok.png',
        description: 'Olaf temporarily becomes immune to disables.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0002/ability_0002_R1.webm',
      },
    ],
    lanes: ['Top'],
    releaseDate: '2010-06-09',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V1.0.0.87',
    attackRange: 125,
    region: 'Freljord',
    species: 'Human',
    ratings: {
      damage: 2,
      toughness: 2,
      control: 2,
      mobility: 1,
      utility: 1,
      difficulty: 1,
      style: 30,
      damageBreakdown: {
        magic: 0.8,
        physical: 69.4,
        true_: 29.8,
      },
    },
    spotlightVideoID: 'YuC3ZUY88d8',
    tagArrays: [[26, 33, 39, 65, 69], [], [103], [99], [88, 102], [70, 99]],
    ids: {
      kebab: 'olaf',
      ddragon: 'Olaf',
      cdragon: 2,
      wiki: 'Olaf',
      universe: 'Olaf',
    },
  },
  {
    name: 'Orianna',
    title: 'the Lady of Clockwork',
    roles: ['Mage', 'Support'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Orianna.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Orianna_0.jpg',
    abilities: [
      {
        name: 'Clockwork Windup',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/OriannaPassive.png',
        description:
          "Orianna's Attacks deal additional magic damage. This damage increases the more Orianna Attacks the same target.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0061/ability_0061_P1.webm',
      },
      {
        name: 'Command: Attack',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/OrianaIzunaCommand.png',
        description:
          'Orianna commands her Ball to fire toward a target location, dealing magic damage to targets along the way (deals less damage to subsequent targets). Her Ball remains at the target location after.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0061/ability_0061_Q1.webm',
      },
      {
        name: 'Command: Dissonance',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/OrianaDissonanceCommand.png',
        description:
          'Orianna commands her Ball to release a pulse of energy, dealing magic damage around it. This leaves a field behind that speeds up allies and slows enemies.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0061/ability_0061_W1.webm',
      },
      {
        name: 'Command: Protect',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/OrianaRedactCommand.png',
        description:
          'Orianna commands her Ball to attach to an allied champion, Shielding them and dealing magic damage to any enemies it passes through on the way. Additionally, the Ball grants additional Armor and Magic Resist to the champion it is attached to.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0061/ability_0061_E1.webm',
      },
      {
        name: 'Command: Shockwave',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/OrianaDetonateCommand.png',
        description:
          'Orianna commands her Ball to unleash a shockwave, dealing magic damage and launching nearby enemies towards the Ball after a short delay.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0061/ability_0061_R1.webm',
      },
    ],
    lanes: ['Middle'],
    releaseDate: '2011-06-01',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V1.0.0.119',
    attackRange: 525,
    region: 'Piltover',
    species: 'Golem',
    ratings: {
      damage: 2,
      toughness: 1,
      control: 2,
      mobility: 1,
      utility: 2,
      difficulty: 2,
      style: 90,
      damageBreakdown: {
        magic: 94.7,
        physical: 4.8,
        true_: 0.5,
      },
    },
    spotlightVideoID: 'EUpTRoSQEX4',
    tagArrays: [[1, 26, 67, 68], [53], [103], [99], [102], [80, 99]],
    ids: {
      kebab: 'orianna',
      ddragon: 'Orianna',
      cdragon: 61,
      wiki: 'Orianna',
      universe: 'Orianna',
    },
  },
  {
    name: 'Ornn',
    title: 'The Fire below the Mountain',
    roles: ['Fighter', 'Tank'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Ornn.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ornn_0.jpg',
    abilities: [
      {
        name: 'Living Forge',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/OrnnP.png',
        description:
          'Ornn gains an additional bonus Armor and Magic Resistance from all sources.<br><br>Ornn can spend gold to forge non-consumable items anywhere.<br><br>Additionally, he can create masterwork items for himself and for his allies.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0516/ability_0516_P1.webm',
      },
      {
        name: 'Volcanic Rupture',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/OrnnQ.png',
        description:
          'Ornn slams the ground, sending out a fissure dealing damage and slowing enemies hit. After a small delay, a magma pillar forms at the end location.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0516/ability_0516_Q1.webm',
      },
      {
        name: 'Bellows Breath',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/OrnnW.png',
        description:
          'Ornn advances, breathing fire. Enemies hit by the final gout of flame become Brittle.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0516/ability_0516_W1.webm',
      },
      {
        name: 'Searing Charge',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/OrnnE.png',
        description:
          'Ornn charges, dealing damage to enemies he passes through. If Ornn collides with terrain while charging, the impact creates a shockwave around him which deals damage and knocks up enemies.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0516/ability_0516_E1.webm',
      },
      {
        name: 'Call of the Forge God',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/OrnnR.png',
        description:
          'Ornn summons a massive elemental at a location which travels toward him with increasing speed. Enemies run over by the elemental take damage, are slowed and are made Brittle. Ornn can recast the ability to charge into the elemental, redirecting it in the direction he hits it, causing the elemental to affect any enemies it runs over to be knocked up, dealing the same damage and re-applying Brittle.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0516/ability_0516_R1.webm',
      },
    ],
    lanes: ['Top'],
    releaseDate: '2017-08-23',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V7.17',
    attackRange: 175,
    region: 'Freljord',
    species: 'Spirit God',
    ratings: {
      damage: 1,
      toughness: 3,
      control: 3,
      mobility: 1,
      utility: 2,
      difficulty: 2,
      style: 60,
      damageBreakdown: {
        magic: 64.5,
        physical: 34.5,
        true_: 1,
      },
    },
    spotlightVideoID: 'WaJbuSNlVMU',
    tagArrays: [
      [4, 5, 26, 34, 67, 69],
      [76, 89],
      [101],
      [101],
      [78, 80, 84, 82, 101],
      [80, 78, 84, 82, 91, 101],
    ],
    ids: {
      kebab: 'ornn',
      ddragon: 'Ornn',
      cdragon: 516,
      wiki: 'Ornn',
      universe: 'Ornn',
    },
  },
  {
    name: 'Pantheon',
    title: 'the Unbreakable Spear',
    roles: ['Fighter', 'Assassin'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Pantheon.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pantheon_0.jpg',
    abilities: [
      {
        name: 'Mortal Will',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Pantheon_Passive.png',
        description:
          "Every few spells or attacks, Pantheon's next spell is empowered.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0080/ability_0080_P1.webm',
      },
      {
        name: 'Comet Spear',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/PantheonQ.png',
        description:
          'Pantheon either thrusts his spear or throws his spear in the chosen direction.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0080/ability_0080_Q1.webm',
      },
      {
        name: 'Shield Vault',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/PantheonW.png',
        description: 'Pantheon dashes to a target, damaging and stunning them.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0080/ability_0080_W1.webm',
      },
      {
        name: 'Aegis Assault',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/PantheonE.png',
        description:
          'Pantheon sets his shield, becoming invulnerable to damage from the front and striking repeatedly with his spear.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0080/ability_0080_E1.webm',
      },
      {
        name: 'Grand Starfall',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/PantheonR.png',
        description:
          'Pantheon composes himself and then leaps into the air, landing at a chosen location as a comet.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0080/ability_0080_R1.webm',
      },
    ],
    lanes: ['Support'],
    releaseDate: '2010-02-02',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V1.0.0.72',
    attackRange: 175,
    region: 'Targon',
    species: 'Aspect Host',
    ratings: {
      damage: 3,
      toughness: 2,
      control: 2,
      mobility: 2,
      utility: 1,
      difficulty: 1,
      style: 75,
      damageBreakdown: {
        magic: 6.4,
        physical: 89,
        true_: 4.6,
      },
    },
    spotlightVideoID: 'DTNwrJGjpxo',
    tagArrays: [
      [26, 2, 31, 32, 33, 67, 69],
      [],
      [90, 101],
      [52, 78, 80, 83, 82, 102],
      [89, 101],
      [79, 89, 97, 103],
    ],
    ids: {
      kebab: 'pantheon',
      ddragon: 'Pantheon',
      cdragon: 80,
      wiki: 'Pantheon',
      universe: 'Pantheon',
    },
  },
  {
    name: 'Poppy',
    title: 'Keeper of the Hammer',
    roles: ['Fighter', 'Tank'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Poppy.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Poppy_0.jpg',
    abilities: [
      {
        name: 'Iron Ambassador',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Poppy_Passive.png',
        description:
          'Poppy throws her buckler that bounces off the target. Poppy can pick it up to gain a temporary shield.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0078/ability_0078_P1.webm',
      },
      {
        name: 'Hammer Shock',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/PoppyQ.png',
        description:
          'Poppy swings her hammer, dealing damage and creating a zone that will slow enemies and explode after a delay.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0078/ability_0078_Q1.webm',
      },
      {
        name: 'Steadfast Presence',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/PoppyW.png',
        description:
          'Poppy passively gains Armor and Magic Resist. This bonus increases when she is low on Health. Poppy can activate Steadfast Presence to gain movement speed and stop enemy dashes around her. If a dash is stopped, the enemy is slowed and grounded.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0078/ability_0078_W1.webm',
      },
      {
        name: 'Heroic Charge',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/PoppyE.png',
        description:
          'Poppy dashes to the target and pushes it back. If the target is pushed into a wall, it is stunned.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0078/ability_0078_E1.webm',
      },
      {
        name: "Keeper's Verdict",
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/PoppyR.png',
        description:
          'Poppy channels a hammer strike that knocks enemies very far away.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0078/ability_0078_R1.webm',
      },
    ],
    lanes: ['Jungle'],
    releaseDate: '2010-01-13',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V1.0.0.70',
    attackRange: 125,
    region: 'Demacia',
    species: 'Yordle',
    ratings: {
      damage: 2,
      toughness: 3,
      control: 3,
      mobility: 2,
      utility: 1,
      difficulty: 2,
      style: 75,
      damageBreakdown: {
        magic: 21,
        physical: 74.6,
        true_: 4.4,
      },
    },
    spotlightVideoID: 'Oe-NJKTgz7c',
    tagArrays: [
      [4, 5, 26, 2, 32, 67, 69],
      [],
      [101],
      [80, 19, 99],
      [78, 80, 83, 82, 102],
      [80, 90, 101],
    ],
    ids: {
      kebab: 'poppy',
      ddragon: 'Poppy',
      cdragon: 78,
      wiki: 'Poppy',
      universe: 'Poppy',
    },
  },
  {
    name: 'Pyke',
    title: 'the Bloodharbor Ripper',
    roles: ['Assassin', 'Support'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Pyke.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pyke_0.jpg',
    abilities: [
      {
        name: 'Gift of the Drowned Ones',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/PykePassive.png',
        description:
          'When Pyke is hidden from enemies, he regenerates damage that he has recently taken from champions. Pyke also cannot gain extra Maximum Health from any source, and instead gains Bonus AD.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0555/ability_0555_P1.webm',
      },
      {
        name: 'Bone Skewer',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/PykeQ.png',
        description:
          'Pyke either stabs an enemy in front of him or pulls an enemy towards him.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0555/ability_0555_Q1.webm',
      },
      {
        name: 'Ghostwater Dive',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/PykeW.png',
        description:
          'Pyke enters Camouflage and gains significant movement speed that decays over time.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0555/ability_0555_W1.webm',
      },
      {
        name: 'Phantom Undertow',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/PykeE.png',
        description:
          'Pyke dashes and leaves behind a phantom that will return to him, stunning enemy champions along its path.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0555/ability_0555_E1.webm',
      },
      {
        name: 'Death From Below',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/PykeR.png',
        description:
          'Pyke blinks to and executes low health enemies, allowing him to cast this spell again and granting additional gold to an ally who assists.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0555/ability_0555_R1.webm',
      },
    ],
    lanes: ['Support'],
    releaseDate: '2018-05-31',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V8.11',
    attackRange: 150,
    region: 'Bilgewater',
    species: 'Revenant',
    ratings: {
      damage: 2,
      toughness: 1,
      control: 3,
      mobility: 3,
      utility: 1,
      difficulty: 2,
      style: 50,
      damageBreakdown: {
        magic: 0.3,
        physical: 78,
        true_: 21.7,
      },
    },
    spotlightVideoID: 'g2mara8nFVE',
    tagArrays: [
      [1, 26, 2, 67, 69],
      [],
      [80, 90, 101],
      [99],
      [78, 80, 83, 82, 101],
      [88, 91, 94, 96, 103],
    ],
    ids: {
      kebab: 'pyke',
      ddragon: 'Pyke',
      cdragon: 555,
      wiki: 'Pyke',
      universe: 'Pyke',
    },
  },
  {
    name: 'Qiyana',
    title: 'Empress of the Elements',
    roles: ['Fighter', 'Assassin'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Qiyana.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Qiyana_0.jpg',
    abilities: [
      {
        name: 'Royal Privilege',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Qiyana_Passive.png',
        description:
          "Qiyana's first basic attack or ability against each enemy deals bonus damage.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0246/ability_0246_P1.webm',
      },
      {
        name: 'Elemental Wrath / Edge of Ixtal',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/QiyanaQ.png',
        description:
          'Qiyana swings her weapon, dealing damage with a bonus effect based on her element.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0246/ability_0246_Q1.webm',
      },
      {
        name: 'Terrashape',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/QiyanaW.png',
        description:
          'Qiyana dashes to a location and enchants her weapon with an element. Her attacks and abilities deal bonus damage while her weapon is enchanted. ',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0246/ability_0246_W1.webm',
      },
      {
        name: 'Audacity',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/QiyanaE.png',
        description: 'Qiyana dashes to an enemy, damaging them.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0246/ability_0246_E1.webm',
      },
      {
        name: 'Supreme Display of Talent',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/QiyanaR.png',
        description:
          'Qiyana sends out a shockwave that detonates whatever elements she hits with it, stunning and damaging nearby enemies.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0246/ability_0246_R1.webm',
      },
    ],
    lanes: ['Middle'],
    releaseDate: '2019-06-28',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V9.13',
    attackRange: 150,
    region: 'Ixtal',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 2,
      mobility: 2,
      utility: 1,
      difficulty: 2,
      style: 70,
      damageBreakdown: {
        magic: 7.1,
        physical: 89,
        true_: 4,
      },
    },
    spotlightVideoID: '3ECXeoLlR3I',
    tagArrays: [
      [4, 26, 2, 67, 69],
      [],
      [80, 27, 101],
      [75, 78, 83, 82, 103],
      [78, 83, 82, 102],
      [80, 101],
    ],
    ids: {
      kebab: 'qiyana',
      ddragon: 'Qiyana',
      cdragon: 246,
      wiki: 'Qiyana',
      universe: 'Qiyana',
    },
  },
  {
    name: 'Quinn',
    title: "Demacia's Wings",
    roles: ['Assassin', 'Marksman'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Quinn.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Quinn_0.jpg',
    abilities: [
      {
        name: 'Harrier',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Quinn_Passive.png',
        description:
          "Valor, Quinn's Demacian eagle, periodically marks enemies as <font color='#FFF673'>Vulnerable</font>. Quinn's first basic attack against <font color='#FFF673'>Vulnerable</font> targets will deal bonus physical damage.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0133/ability_0133_P1.webm',
      },
      {
        name: 'Blinding Assault',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/QuinnQ.png',
        description:
          'Quinn calls Valor to mark an enemy and hinder its vision before damaging all enemies in the immediate area.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0133/ability_0133_Q1.webm',
      },
      {
        name: 'Heightened Senses',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/QuinnW.png',
        description:
          "Passively grants Quinn Attack Speed and Movement Speed after she attacks a <font color='#FFF673'>Vulnerable</font> target. Activate to have Valor reveal a large area nearby.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0133/ability_0133_W1.webm',
      },
      {
        name: 'Vault',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/QuinnE.png',
        description:
          "Quinn dashes to an enemy, dealing physical damage and slowing the target's Movement Speed. Upon reaching the target, she leaps off the target, briefly interrupting it, and lands near her maximum Attack Range away from the target.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0133/ability_0133_E1.webm',
      },
      {
        name: 'Behind Enemy Lines',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/QuinnR.png',
        description:
          'Quinn and Valor team up to fly around at great speed.  Ending the ability casts Skystrike, which deals damage to nearby enemies and marks champions as Vulnerable.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0133/ability_0133_R1.webm',
      },
    ],
    lanes: ['Top'],
    releaseDate: '2013-03-01',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V3.03',
    attackRange: 525,
    region: 'Demacia',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 2,
      mobility: 3,
      utility: 1,
      difficulty: 2,
      style: 20,
      damageBreakdown: {
        magic: 6.3,
        physical: 89.3,
        true_: 4.5,
      },
    },
    spotlightVideoID: 'O9eVLrcih9s',
    tagArrays: [
      [4, 26, 67, 68],
      [53],
      [10, 21, 101],
      [99],
      [52, 78, 80, 83, 82, 102],
      [89, 99],
    ],
    ids: {
      kebab: 'quinn',
      ddragon: 'Quinn',
      cdragon: 133,
      wiki: 'Quinn',
      universe: 'Quinn',
    },
  },
  {
    name: 'Rakan',
    title: 'The Charmer',
    roles: ['Support'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Rakan.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rakan_0.jpg',
    abilities: [
      {
        name: 'Fey Feathers',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Rakan_P.png',
        description: 'Rakan periodically gains a shield.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0497/ability_0497_P1.webm',
      },
      {
        name: 'Gleaming Quill',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/RakanQ.png',
        description:
          'Flings a magical feather that deals magic damage. Striking a champion or epic monster enables Rakan to heal his allies.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0497/ability_0497_Q1.webm',
      },
      {
        name: 'Grand Entrance',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/RakanW.png',
        description:
          'Dashes to a location, knocking up nearby enemies on arrival.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0497/ability_0497_W1.webm',
      },
      {
        name: 'Battle Dance',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/RakanE.png',
        description:
          'Flies to an allied champion granting them a shield. Can be re-cast for free for a short duration.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0497/ability_0497_E1.webm',
      },
      {
        name: 'The Quickness',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/RakanR.png',
        description:
          'Gains movement speed, charming and dealing magic damage to enemies touched.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0497/ability_0497_R1.webm',
      },
    ],
    lanes: ['Support'],
    releaseDate: '2017-04-19',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V7.8',
    attackRange: 300,
    region: 'Ionia',
    species: 'Vastayan',
    ratings: {
      damage: 1,
      toughness: 2,
      control: 3,
      mobility: 3,
      utility: 3,
      difficulty: 2,
      style: 90,
      damageBreakdown: {
        magic: 74.5,
        physical: 13.9,
        true_: 11.5,
      },
    },
    spotlightVideoID: 'HYWNOHM1fSk',
    tagArrays: [
      [5, 26, 67, 68],
      [75],
      [101],
      [78, 80, 83, 82, 103],
      [75, 78, 91, 102],
      [80, 83, 82, 12, 99],
    ],
    ids: {
      kebab: 'rakan',
      ddragon: 'Rakan',
      cdragon: 497,
      wiki: 'Rakan',
      universe: 'Rakan',
    },
  },
  {
    name: 'Rammus',
    title: 'the Armordillo',
    roles: ['Fighter', 'Tank'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Rammus.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rammus_0.jpg',
    abilities: [
      {
        name: 'Spiked Shell',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Armordillo_ScavengeArmor.png',
        description:
          "Rammus' basic attacks deal bonus magic damage, scaling with his Armor.",
        video: '',
      },
      {
        name: 'Powerball',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/PowerBall.png',
        description:
          'Rammus accelerates in a ball towards his enemies, dealing damage and slowing targets affected by the impact.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0033/ability_0033_Q1.webm',
      },
      {
        name: 'Defensive Ball Curl',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/DefensiveBallCurl.png',
        description:
          "Rammus goes into a defensive formation, vastly increasing his Armor and Magic Resistance, amplifying Spiked Shells' damage, and returning damage to enemies that basic attack him, but he is also slowed during this time.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0033/ability_0033_W1.webm',
      },
      {
        name: 'Frenzying Taunt',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/PuncturingTaunt.png',
        description:
          'Rammus taunts an enemy champion or monster into a reckless assault against him. Additionally, he gains increased Attack Speed for a short time, but this bonus is extended by having any of his other spells active.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0033/ability_0033_E1.webm',
      },
      {
        name: 'Soaring Slam',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/Tremors2.png',
        description:
          'Rammus hops into the air and slams down at a target area, dealing magic damage and slowing enemies. If cast while Rammus is in Powerball, Rammus knocks up enemies near the center as well.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0033/ability_0033_R1.webm',
      },
    ],
    lanes: ['Jungle'],
    releaseDate: '2009-07-10',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V0.7.20.113',
    attackRange: 125,
    region: 'Shurima',
    species: 'Unknown',
    ratings: {
      damage: 2,
      toughness: 3,
      control: 3,
      mobility: 2,
      utility: 1,
      difficulty: 1,
      style: 65,
      damageBreakdown: {
        magic: 54.5,
        physical: 31.3,
        true_: 14.2,
      },
    },
    spotlightVideoID: 'aeU2b9s-ZVw',
    tagArrays: [
      [4, 5, 26, 2, 33, 67, 69],
      [],
      [80, 99],
      [91, 99],
      [80, 14, 102],
      [78, 80, 83, 82, 103],
    ],
    ids: {
      kebab: 'rammus',
      ddragon: 'Rammus',
      cdragon: 33,
      wiki: 'Rammus',
      universe: 'Rammus',
    },
  },
  {
    name: "Rek'Sai",
    title: 'the Void Burrower',
    roles: ['Fighter'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/RekSai.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/RekSai_0.jpg',
    abilities: [
      {
        name: "Fury of the Xer'Sai",
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/RekSai_Passive.png',
        description:
          "Rek'sai generates Fury by Attack and hitting with basic abilities. She consumes this Fury while Burrowed to restore health.",
        video: '',
      },
      {
        name: "Queen's Wrath / Prey Seeker",
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/RekSaiQ.png',
        description:
          "Rek'Sai's next 3 basic attacks deal bonus Physical Damage to nearby enemies.<br><br>While Burrowed, Rek'Sai launches a burst of void-charged earth that deals Physical Damage and reveals enemies hit.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0421/ability_0421_Q1.webm',
      },
      {
        name: 'Burrow / Un-burrow',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/RekSaiW.png',
        description:
          "Rek'Sai burrows into the ground, gaining new abilities and increased Movement Speed. Her vision range is reduced and she cannot use basic attacks.<br><br>While Burrowed, Rek'Sai may cast Un-burrow to knock up and damage nearby enemies.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0421/ability_0421_W1.webm',
      },
      {
        name: 'Furious Bite / Tunnel',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/RekSaiE.png',
        description:
          "Rek'Sai bites her target, dealing double and True Damage if she has max Fury.<br><br>While Burrowed, Rek'Sai creates a re-usable, long lasting tunnel. Enemies can destroy it by standing on top of either entrance.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0421/ability_0421_E1.webm',
      },
      {
        name: 'Void Rush',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/RekSaiRWrapper.png',
        description:
          "Rek'sai passively marks targets by damaging them. She can activate this ability to become briefly untargetable and lunge at a marked target for heavy damage based on their missing health.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0421/ability_0421_R1.webm',
      },
    ],
    lanes: ['Jungle'],
    releaseDate: '2014-12-11',
    resource: 'Rage',
    rangeType: 'Melee',
    releasePatch: 'V4.21',
    attackRange: 175,
    region: 'Void',
    species: 'Voidborn',
    ratings: {
      damage: 2,
      toughness: 2,
      control: 2,
      mobility: 2,
      utility: 2,
      difficulty: 2,
      style: 30,
      damageBreakdown: {
        magic: 0.3,
        physical: 76.8,
        true_: 22.9,
      },
    },
    spotlightVideoID: 'bmurGIqiPgg',
    tagArrays: [
      [5, 32, 34, 64, 69, 71],
      [],
      [53],
      [80],
      [78, 83, 82],
      [78, 81, 102],
    ],
    ids: {
      kebab: 'rek-sai',
      ddragon: 'RekSai',
      cdragon: 421,
      wiki: "Rek'Sai",
      universe: 'RekSai',
    },
  },
  {
    name: 'Rell',
    title: 'the Iron Maiden',
    roles: ['Tank'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Rell.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rell_0.jpg',
    abilities: [
      {
        name: 'Break the Mold',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/RellP.DarkSupport.png',
        description:
          "Rell attacks slowly but steals her target's <scaleArmor>Armor</scaleArmor> and <scaleMR>Magic Resist</scaleMR> on hit, dealing bonus damage based on the amount stolen.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0526/ability_0526_P1.webm',
      },
      {
        name: 'Shattering Strike',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/RellQ.png',
        description:
          "Rell thrusts her lance to deal <magicDamage>magic damage</magicDamage> to units in a line, breaking their Shields.  The first unit hit additionally suffers <spellName>Break the Mold</spellName>'s defense steal. <br><br>If Rell is bound to an ally with <spellName>Attract and Repel</spellName>, they both recover health for each enemy champion hit by this spell.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0526/ability_0526_Q1.webm',
      },
      {
        name: 'Ferromancy: Crash Down',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/RellW_Dismount.png',
        description:
          '<spellPassive>Passive:</spellPassive> Rell gains additional Move Speed while mounted and additional <scaleArmor>Armor</scaleArmor> and <scaleMR>Magic Resist</scaleMR> while armored.<br><br><spellActive>Active:</spellActive> Rell changes forms, casting a different spell based on form.<li> Mounted: Rell crashes down in her armor, knocking enemies up and gaining a large shield.</li><li> Armored: Rell forms her mount, gaining a burst of speed and flipping the next enemy she attacks.</li>',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0526/ability_0526_W1.webm',
      },
      {
        name: 'Attract and Repel',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/RellE.png',
        description:
          'Rell binds a piece of her Armor to another allied champion to grant them <scaleArmor>Armor</scaleArmor> and <scaleMR>Magic Resist</scaleMR> while near.<br><br>While she has an ally bound in this way, Rell can cast this ability without targeting an allied champion to snap the binding and <status>Stun</status> enemies caught in it.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0526/ability_0526_E1.webm',
      },
      {
        name: 'Magnet Storm',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/RellR.png',
        description:
          'Rell explodes in a magnetic fury, violently <status>Pulling</status> nearby enemies towards herself. Then Rell constantly <status>Drags</status> nearby enemies towards herself for a short while, dealing <magicDamage>magic damage</magicDamage> over time.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0526/ability_0526_R1.webm',
      },
    ],
    lanes: ['Support'],
    releaseDate: '2020-12-10',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V10.25',
    attackRange: 175,
    region: 'Noxus',
    species: 'Human',
    ratings: {
      damage: 1,
      toughness: 3,
      control: 3,
      mobility: 2,
      utility: 2,
      difficulty: 2,
      style: 85,
      damageBreakdown: {
        magic: 78.7,
        physical: 8.5,
        true_: 12.7,
      },
    },
    spotlightVideoID: '7QSaMYFxm84',
    tagArrays: [
      [5, 1, 2, 67, 69],
      [53],
      [53, 101],
      [78, 80, 83, 82, 91, 99],
      [80, 91],
      [80, 20, 99],
    ],
    ids: {
      kebab: 'rell',
      ddragon: 'Rell',
      cdragon: 526,
      wiki: 'Rell',
      universe: 'Rell',
    },
  },
  {
    ids: {
      cdragon: 888,
      ddragon: 'Renata',
      kebab: 'renata',
      universe: 'RenataGlasc',
      wiki: 'Renata_Glasc',
    },
    name: 'Renata Glasc',
    title: 'the Chem-Baroness',
    roles: ['Mage', 'Support'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/12.7.1/img/champion/Renata.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Renata_0.jpg',
    resource: 'Mana',
    attackRange: 550,
    abilities: [
      {
        name: 'Leverage',
        img: 'https://ddragon.leagueoflegends.com/cdn/12.7.1/img/passive/Renata_P.Renata.png',
        description:
          "Renata's Attacks deal bonus damage and mark enemies. Renata's allies can damage marked enemies to deal bonus damage.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0888/ability_0888_P1.webm',
      },
      {
        name: 'Handshake',
        img: 'https://ddragon.leagueoflegends.com/cdn/12.7.1/img/spell/RenataQ.png',
        description:
          'Renata sends out a missile rooting the first enemy hit, and can recast the ability to throw the unit in a direction.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0888/ability_0888_Q1.webm',
      },
      {
        name: 'Bailout',
        img: 'https://ddragon.leagueoflegends.com/cdn/12.7.1/img/spell/RenataW.png',
        description:
          'Renata buffs an allied champion to fight harder, delaying their death and potentially saving them if they get a takedown.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0888/ability_0888_W1.webm',
      },
      {
        name: 'Loyalty Program',
        img: 'https://ddragon.leagueoflegends.com/cdn/12.7.1/img/spell/RenataE.png',
        description:
          'Renata sends out a pair of chemtech missiles, shielding allies and damaging and slowing enemies hit.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0888/ability_0888_E1.webm',
      },
      {
        name: 'Hostile Takeover',
        img: 'https://ddragon.leagueoflegends.com/cdn/12.7.1/img/spell/RenataR.png',
        description:
          'Renata sends out a wave of chemicals, causing any enemies hit to go Berserk.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0888/ability_0888_R1.webm',
      },
    ],
    ratings: {
      difficulty: 2,
      style: 80,
      damage: 2,
      toughness: 1,
      control: 3,
      mobility: 1,
      utility: 2,
      damageBreakdown: {
        physical: 15.4,
        magic: 58.2,
        true_: 26.4,
      },
    },
    lanes: ['Support'],
    rangeType: 'Ranged',
    region: 'Zaun',
    species: 'Human',
    releaseDate: '2022-02-17',
    releasePatch: 'V12.4',
    spotlightVideoID: 'yahJE5tLxHg',
    tagArrays: [[68, 67], [], [91, 101], [88, 102], [103], [88, 101]],
  },
  {
    name: 'Renekton',
    title: 'the Butcher of the Sands',
    roles: ['Fighter', 'Tank'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Renekton.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Renekton_0.jpg',
    abilities: [
      {
        name: 'Reign of Anger',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Renekton_Passive.png',
        description:
          "Renekton's attacks generate Fury, increased when he is low on life. This Fury can empower his abilities with bonus effects.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0058/ability_0058_P1.webm',
      },
      {
        name: 'Cull the Meek',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/RenektonCleave.png',
        description:
          'Renekton swings his blade, dealing moderate physical damage to all targets around him, and heals for a small portion of the damage dealt. If he has more than 50 Fury, his damage and heal are increased.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0058/ability_0058_Q1.webm',
      },
      {
        name: 'Ruthless Predator',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/RenektonPreExecute.png',
        description:
          'Renekton slashes his target twice, dealing moderate physical damage and stuns them for 0.75 seconds. If Renekton has more than 50 Fury, he slashes his target three times, destroying damage shields on the target, dealing high physical damage, and stunning them for 1.5 seconds.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0058/ability_0058_W1.webm',
      },
      {
        name: 'Slice and Dice',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/RenektonSliceAndDice.png',
        description:
          'Renekton dashes, dealing damage to units along the way. Empowered, Renekton deals bonus damage and reduces the Armor of units hit.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0058/ability_0058_E1.webm',
      },
      {
        name: 'Dominus',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/RenektonReignOfTheTyrant.png',
        description:
          'Renekton transforms into the Tyrant form, gaining bonus Health and dealing damage to enemies around him. While in this form, Renekton gains Fury periodically.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0058/ability_0058_R1.webm',
      },
    ],
    lanes: ['Top'],
    releaseDate: '2011-01-18',
    resource: 'Fury',
    rangeType: 'Melee',
    releasePatch: 'V1.0.0.109',
    attackRange: 125,
    region: 'Shurima',
    species: 'God-Warrior',
    ratings: {
      damage: 2,
      toughness: 2,
      control: 2,
      mobility: 2,
      utility: 1,
      difficulty: 1,
      style: 45,
      damageBreakdown: {
        magic: 13,
        physical: 86.6,
        true_: 0.5,
      },
    },
    spotlightVideoID: 'IDXEHgsLfeM',
    tagArrays: [
      [2, 64, 69],
      [75],
      [99],
      [52, 80, 99],
      [78, 83, 82, 91, 101],
      [70, 99],
    ],
    ids: {
      kebab: 'renekton',
      ddragon: 'Renekton',
      cdragon: 58,
      wiki: 'Renekton',
      universe: 'Renekton',
    },
  },
  {
    name: 'Rengar',
    title: 'the Pridestalker',
    roles: ['Fighter', 'Assassin'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Rengar.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rengar_0.jpg',
    abilities: [
      {
        name: 'Unseen Predator',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Rengar_P.png',
        description:
          "While in brush, Rengar leaps at his target with his basic attack. Leaping while at no Ferocity generates Ferocity.<br><br>At Max Ferocity, his next ability is empowered. Casting an empowered ability increases Rengar's Movement Speed for a few seconds.<br><br>Killing enemy champions awards trophies on Rengar's <font color='#BBFFFF'>Bonetooth Necklace</font>, granting bonus attack damage.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0107/ability_0107_P1.webm',
      },
      {
        name: 'Savagery',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/RengarQ.png',
        description:
          "Rengar's next attack brutally stabs his target for bonus damage.<br><br>Ferocity effect: deals increased damage and grants Attack Speed.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0107/ability_0107_Q1.webm',
      },
      {
        name: 'Battle Roar',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/RengarW.png',
        description:
          'Rengar lets out a battle roar, damaging enemies and healing for some of the recent damage he has taken.<br><br>Ferocity effect: additionally breaks crowd control effects.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0107/ability_0107_W1.webm',
      },
      {
        name: 'Bola Strike',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/RengarE.png',
        description:
          'Rengar throws a bola, slowing the first target hit for a short duration.<br><br>Ferocity effect: roots the target.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0107/ability_0107_E1.webm',
      },
      {
        name: 'Thrill of the Hunt',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/RengarR.png',
        description:
          "Rengar's predatory instincts take over, <font color='#cd90ee'>Camouflaging</font> him and revealing the nearest enemy champion in a large radius around him. During Thrill of the Hunt, Rengar gains Movement Speed and he can leap to the tracked enemy without being in brush, reducing their armor.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0107/ability_0107_R1.webm',
      },
    ],
    lanes: ['Jungle'],
    releaseDate: '2012-08-21',
    resource: 'Ferocity',
    rangeType: 'Melee',
    releasePatch: 'V1.0.0.145',
    attackRange: 125,
    region: 'Ixtal',
    species: 'Vastayan',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 2,
      mobility: 2,
      utility: 1,
      difficulty: 2,
      style: 30,
      damageBreakdown: {
        magic: 6.7,
        physical: 90.8,
        true_: 2.4,
      },
    },
    spotlightVideoID: 'gbHGFazlpCA',
    tagArrays: [
      [26, 39, 67, 64, 69],
      [75, 88],
      [53, 99],
      [99],
      [80, 27, 101],
      [99],
    ],
    ids: {
      kebab: 'rengar',
      ddragon: 'Rengar',
      cdragon: 107,
      wiki: 'Rengar',
      universe: 'Rengar',
    },
  },
  {
    name: 'Riven',
    title: 'the Exile',
    roles: ['Fighter', 'Assassin'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Riven.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Riven_0.jpg',
    abilities: [
      {
        name: 'Runic Blade',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/RivenRunicBlades.png',
        description:
          "Riven's abilities charge her blade, and her basic attacks expend charges to deal an additional damage.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0092/ability_0092_P1.webm',
      },
      {
        name: 'Broken Wings',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/RivenTriCleave.png',
        description:
          'Riven lashes out in a series of strikes. This ability can be reactivated three times in a short time frame with the third hit knocking back nearby enemies.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0092/ability_0092_Q1.webm',
      },
      {
        name: 'Ki Burst',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/RivenMartyr.png',
        description:
          'Riven emits a Ki Burst, damaging and stunning nearby enemies.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0092/ability_0092_W1.webm',
      },
      {
        name: 'Valor',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/RivenFeint.png',
        description:
          'Riven steps forward a short distance and blocks incoming damage.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0092/ability_0092_E1.webm',
      },
      {
        name: 'Blade of the Exile',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/RivenFengShuiEngine.png',
        description:
          'Riven empowers her keepsake weapon with energy, and gains Attack Damage and Range. During this time, she also gains the ability to use Wind Slash, a powerful ranged attack, once.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0092/ability_0092_R1.webm',
      },
    ],
    lanes: ['Top'],
    releaseDate: '2011-09-14',
    resource: 'None',
    rangeType: 'Melee',
    releasePatch: 'V1.0.0.125',
    attackRange: 125,
    region: 'Noxus',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 2,
      control: 2,
      mobility: 3,
      utility: 1,
      difficulty: 2,
      style: 75,
      damageBreakdown: {
        magic: 0.2,
        physical: 98.7,
        true_: 1.1,
      },
    },
    spotlightVideoID: 'V_ERvayBr3M',
    tagArrays: [
      [5, 2, 62, 69],
      [53],
      [78, 80, 84, 83, 82, 91, 99],
      [80, 99],
      [78, 84, 82, 101],
      [91, 99],
    ],
    ids: {
      kebab: 'riven',
      ddragon: 'Riven',
      cdragon: 92,
      wiki: 'Riven',
      universe: 'Riven',
    },
  },
  {
    name: 'Rumble',
    title: 'the Mechanized Menace',
    roles: ['Fighter', 'Mage'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Rumble.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rumble_0.jpg',
    abilities: [
      {
        name: 'Junkyard Titan',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Rumble_JunkyardTitan1.png',
        description:
          'Every spell Rumble casts gives him Heat. When he reaches 50% Heat he reaches Danger Zone, granting all his basic abilities bonus effects. When he reaches 100% Heat, he starts Overheating, gaining bonus Attack Speed and granting his basic attacks bonus damage, but making him unable to cast spells for a few seconds.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0068/ability_0068_P1.webm',
      },
      {
        name: 'Flamespitter',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/RumbleFlameThrower.png',
        description:
          'Rumble torches opponents in front of him, dealing magic damage in a cone for 3 seconds. While in Danger Zone this damage is increased.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0068/ability_0068_Q1.webm',
      },
      {
        name: 'Scrap Shield',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/RumbleShield.png',
        description:
          'Rumble pulls up a shield, protecting him from damage and granting him a quick burst of speed. While in Danger Zone, the shield strength and speed bonus is increased.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0068/ability_0068_W1.webm',
      },
      {
        name: 'Electro Harpoon',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/RumbleGrenade.png',
        description:
          'Rumble launches a harpoon, electrocuting his target with magic damage, slowing their Move Speed, and reducing their Magic Resist. Rumble can carry 2 harpoons at a time. While in Danger Zone the damage and slow percentage is increased.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0068/ability_0068_E1.webm',
      },
      {
        name: 'The Equalizer',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/RumbleCarpetBomb.png',
        description:
          'Rumble fires off a group of rockets, creating a wall of flames that damages and slows enemies.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0068/ability_0068_R1.webm',
      },
    ],
    lanes: ['Middle', 'Top'],
    releaseDate: '2011-04-26',
    resource: 'Heat',
    rangeType: 'Melee',
    releasePatch: 'V1.0.0.116',
    attackRange: 125,
    region: 'Bandle City',
    species: 'Yordle',
    ratings: {
      damage: 3,
      toughness: 2,
      control: 2,
      mobility: 1,
      utility: 1,
      difficulty: 2,
      style: 90,
      damageBreakdown: {
        magic: 92.9,
        physical: 2.4,
        true_: 4.7,
      },
    },
    spotlightVideoID: 'Dghwqj_Qddc',
    tagArrays: [[26, 69], [53], [101], [99], [101], []],
    ids: {
      kebab: 'rumble',
      ddragon: 'Rumble',
      cdragon: 68,
      wiki: 'Rumble',
      universe: 'Rumble',
    },
  },
  {
    name: 'Ryze',
    title: 'the Rune Mage',
    roles: ['Fighter', 'Mage'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Ryze.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ryze_0.jpg',
    abilities: [
      {
        name: 'Arcane Mastery',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Ryze_P.png',
        description:
          "<mainText>Ryze's spells deal extra damage based on his Bonus Mana, and he gains a percentage increase to his maximum Mana based on his Ability Power.</mainText>",
        video: '',
      },
      {
        name: 'Overload',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/RyzeQWrapper.png',
        description:
          "Passively, Ryze's other basic abilities reset the cooldown of Overload and charge a rune. When Ryze casts Overload with 2 runes charged, he gains a brief burst of Movement Speed.<br><br>On cast, Ryze throws a charge of pure energy in a line, dealing damage to the first enemy struck. If the target has Flux on it, Overload deals extra damage and bounces to nearby enemies with Flux.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0013/ability_0013_Q1.webm',
      },
      {
        name: 'Rune Prison',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/RyzeW.png',
        description:
          'Ryze traps a target in a cage of runes, damaging them and slowing their movement. If the target has Flux on it, they are instead rooted.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0013/ability_0013_W1.webm',
      },
      {
        name: 'Spell Flux',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/RyzeE.png',
        description:
          "Ryze releases an orb of pure magical power that damages an enemy and debuffs all nearby enemies. Ryze's spells have additional effects against the debuffed enemy.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0013/ability_0013_E1.webm',
      },
      {
        name: 'Realm Warp',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/RyzeR.png',
        description:
          'Passively, Overload deals even more damage against targets with Flux.<br><br>On cast, Ryze creates a portal to a nearby location. After a few seconds, allies standing near the portal are teleported to the target location.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0013/ability_0013_R1.webm',
      },
    ],
    lanes: ['Middle'],
    releaseDate: '2009-02-21',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V0.1.0.2',
    attackRange: 550,
    region: 'Runeterra',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 2,
      mobility: 2,
      utility: 2,
      difficulty: 2,
      style: 100,
      damageBreakdown: {
        magic: 96,
        physical: 3.5,
        true_: 0.5,
      },
    },
    spotlightVideoID: 'qNk6uNCLuDo',
    tagArrays: [
      [26, 32, 67, 68],
      [],
      [101],
      [80, 27, 102],
      [102],
      [10, 22, 89, 103],
    ],
    ids: {
      kebab: 'ryze',
      ddragon: 'Ryze',
      cdragon: 13,
      wiki: 'Ryze',
      universe: 'Ryze',
    },
  },
  {
    name: 'Samira',
    title: 'the Desert Rose',
    roles: ['Marksman'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Samira.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Samira_0.jpg',
    abilities: [
      {
        name: 'Daredevil Impulse',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/SamiraP.Samira.png',
        description:
          "Samira builds a combo by hitting attacks or abilities unique from the previous hit. Samira's attacks in melee range deal additional magic damage. Samira's attacks against enemies affected by <status>Immobilizing</status> effects will dash her to her attack range. If the enemy is <status>Knocked Up</status>, she also keeps them <status>Knocked Up</status> briefly.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0360/ability_0360_P1.webm',
      },
      {
        name: 'Flair',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SamiraQ.png',
        description:
          'Samira fires a shot or swings her sword, dealing damage. If cast during Wild Rush, strike all enemies in her path upon completion.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0360/ability_0360_Q1.webm',
      },
      {
        name: 'Blade Whirl',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SamiraW.png',
        description:
          'Samira slashes around her, damaging enemies and destroying enemy missiles.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0360/ability_0360_W1.webm',
      },
      {
        name: 'Wild Rush',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SamiraE.png',
        description:
          "Samira dashes through an enemy (including structures), slashing enemies she passes through and gaining Attack Speed. Killing an enemy champion refreshes this ability's cooldown.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0360/ability_0360_E1.webm',
      },
      {
        name: 'Inferno Trigger',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SamiraR.png',
        description:
          'Samira unleashes a torrent of shots from her weapons, wildly shooting all enemies surrounding her.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0360/ability_0360_R1.webm',
      },
    ],
    lanes: ['Bottom'],
    releaseDate: '2020-09-21',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V10.19',
    attackRange: 500,
    region: 'Noxus',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 2,
      control: 1,
      mobility: 3,
      utility: 1,
      difficulty: 2,
      style: 0,
      damageBreakdown: {
        magic: 11.3,
        physical: 86,
        true_: 2.7,
      },
    },
    spotlightVideoID: 'NtUU7U9X5zk',
    tagArrays: [
      [5, 67, 68],
      [84, 82],
      [101],
      [99],
      [78, 83, 82, 94, 88, 102],
      [100],
    ],
    ids: {
      kebab: 'samira',
      ddragon: 'Samira',
      cdragon: 360,
      wiki: 'Samira',
      universe: 'Samira',
    },
  },
  {
    name: 'Sejuani',
    title: 'Fury of the North',
    roles: ['Fighter', 'Tank'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Sejuani.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sejuani_0.jpg',
    abilities: [
      {
        name: 'Fury of the North',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Sejuani_passive.png',
        description:
          'After being out of combat, Sejuani gains Frost Armor which grants Armor and Magic Resist and immunity to slows. Frost Armor persists for a short time after Sejuani takes damage.  Sejuani can damage a stunned enemy to shatter it, dealing massive magic damage.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0113/ability_0113_P1.webm',
      },
      {
        name: 'Arctic Assault',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SejuaniQ.png',
        description:
          'Sejuani charges forward, knocking enemies into the air. The charge stops after hitting an enemy champion.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0113/ability_0113_Q1.webm',
      },
      {
        name: "Winter's Wrath",
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SejuaniW.png',
        description:
          'Sejuani swings her mace twice, dealing damage, slowing enemies and applying Frost stacks.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0113/ability_0113_W1.webm',
      },
      {
        name: 'Permafrost',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SejuaniE.png',
        description:
          'Sejuani freezes and stuns an enemy champion that has maximum Frost stacks.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0113/ability_0113_E1.webm',
      },
      {
        name: 'Glacial Prison',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SejuaniR.png',
        description:
          'Sejuani throws her bola that freezes and stuns the first champion hit and creates an ice storm that slows other enemies.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0113/ability_0113_R1.webm',
      },
    ],
    lanes: ['Jungle'],
    releaseDate: '2012-01-17',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V1.0.0.132',
    attackRange: 150,
    region: 'Freljord',
    species: 'Human',
    ratings: {
      damage: 2,
      toughness: 2,
      control: 3,
      mobility: 2,
      utility: 1,
      difficulty: 2,
      style: 75,
      damageBreakdown: {
        magic: 44.8,
        physical: 48.6,
        true_: 6.5,
      },
    },
    spotlightVideoID: 'bOWoAktkGQg',
    tagArrays: [
      [5, 26, 2, 36, 37, 67, 69],
      [],
      [78, 80, 83, 82, 101],
      [101],
      [80, 8, 102],
      [80, 101],
    ],
    ids: {
      kebab: 'sejuani',
      ddragon: 'Sejuani',
      cdragon: 113,
      wiki: 'Sejuani',
      universe: 'Sejuani',
    },
  },
  {
    name: 'Senna',
    title: 'the Redeemer',
    roles: ['Marksman', 'Support'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Senna.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Senna_0.jpg',
    abilities: [
      {
        name: 'Absolution',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Senna_Passive.png',
        description:
          "When units die near Senna, their souls are periodically trapped by the Black Mist. Senna can attack these souls to free them, absorbing the Mist that held them in death. Mist fuels her Relic Cannon's power with increased Attack Damage, Attack Range, and Critical Strike Chance. <br><br>Attacks from Senna's Relic Cannon take longer to fire, deal bonus damage, and briefly grant her a portion of her target's Move Speed.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0235/ability_0235_P1.webm',
      },
      {
        name: 'Piercing Darkness',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SennaQ.png',
        description:
          'From the twin barrels of her Relic Cannon, Senna fires a unified beam of light and shadow through a target, healing allies and damaging enemies.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0235/ability_0235_Q1.webm',
      },
      {
        name: 'Last Embrace',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SennaW.png',
        description:
          'Senna sends forth a wave of Black Mist. If it hits an enemy it latches onto them hungrily, rooting them and everything nearby after a brief delay.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0235/ability_0235_W1.webm',
      },
      {
        name: 'Curse of the Black Mist',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SennaE.png',
        description:
          'Senna draws the Mist she has stored in her weapon into a storm around her, embracing darkness and becoming a wraith within. Allies who enter the area are camouflaged and also appear as wraiths as the Mist shrouds them. Wraiths gain increased Move Speed, are unselectable, and hide their identities.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0235/ability_0235_E1.webm',
      },
      {
        name: 'Dawning Shadow',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SennaR.png',
        description:
          'Senna calls upon the relic stones of fallen Sentinels, splitting her relic cannon into a holy array of shadow and light. She then fires a global beam that shields allies from harm, while damaging enemies caught in the center.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0235/ability_0235_R1.webm',
      },
    ],
    lanes: ['Support'],
    releaseDate: '2019-11-10',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V9.22',
    attackRange: 600,
    region: 'Blessed Isles',
    species: 'Human',
    ratings: {
      damage: 2,
      toughness: 1,
      control: 2,
      mobility: 1,
      utility: 3,
      difficulty: 2,
      style: 30,
      damageBreakdown: {
        magic: 1.5,
        physical: 90.4,
        true_: 8.1,
      },
    },
    spotlightVideoID: '9n97hMnjhbA',
    tagArrays: [[67, 68], [73, 88], [102], [80, 27, 101], [99], [87, 101]],
    ids: {
      kebab: 'senna',
      ddragon: 'Senna',
      cdragon: 235,
      wiki: 'Senna',
      universe: 'Senna',
    },
  },
  {
    name: 'Seraphine',
    title: 'the Starry-Eyed Songstress',
    roles: ['Mage', 'Support'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Seraphine.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Seraphine_0.jpg',
    abilities: [
      {
        name: 'Stage Presence',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Seraphine_Passive.EllipsisMage.png',
        description:
          'Every third basic spell will cast twice from Seraphine. Additionally, casting spells near allies grants her bonus magic damage and range on her next basic attack.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0147/ability_0147_P1.webm',
      },
      {
        name: 'High Note',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SeraphineQ.png',
        description: 'Seraphine deals damage in an area.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0147/ability_0147_Q1.webm',
      },
      {
        name: 'Surround Sound',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SeraphineW.png',
        description:
          'Seraphine Shields and Hastes nearby allies. If she is already Shielded she will Heal nearby allies as well.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0147/ability_0147_W1.webm',
      },
      {
        name: 'Beat Drop',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SeraphineE.png',
        description:
          'Seraphine deals damage and impairs the movement of enemies in a line.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0147/ability_0147_E1.webm',
      },
      {
        name: 'Encore',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SeraphineR.png',
        description:
          'Seraphine deals damage and charms enemies hit, refreshing the range with every allied or enemy champion hit.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0147/ability_0147_R1.webm',
      },
    ],
    lanes: ['Support'],
    releaseDate: '2020-10-29',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V10.22',
    attackRange: 525,
    region: 'Piltover',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 3,
      mobility: 1,
      utility: 2,
      difficulty: 1,
      style: 100,
      damageBreakdown: {
        magic: 88.3,
        physical: 10.5,
        true_: 1.1,
      },
    },
    spotlightVideoID: 'hiNN2WKkR3Q',
    tagArrays: [
      [26, 2, 67, 68],
      [53, 104],
      [103],
      [99],
      [80, 27, 101],
      [80, 12, 101],
    ],
    ids: {
      kebab: 'seraphine',
      ddragon: 'Seraphine',
      cdragon: 147,
      wiki: 'Seraphine',
      universe: 'Seraphine',
    },
  },
  {
    name: 'Sett',
    title: 'the Boss',
    roles: ['Fighter', 'Tank'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Sett.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sett_0.jpg',
    abilities: [
      {
        name: 'Pit Grit',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Sett_P.png',
        description:
          "Sett's basic attacks alternate between left and right punch. Right punch is slightly stronger and faster. Sett also hates losing, gaining additional health regeneration based off of his missing health.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0875/ability_0875_P1.webm',
      },
      {
        name: 'Knuckle Down',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SettQ.png',
        description:
          "Sett's next two attacks deal additional damage based off of the target's max health. Sett also gains movement speed while moving towards enemy champions.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0875/ability_0875_Q1.webm',
      },
      {
        name: 'Haymaker',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SettW.png',
        description:
          'Sett passively stores damage he takes as Grit. On cast, Sett expends all stored Grit to gain a shield and punch an area, dealing true damage in the center and physical damage on the sides.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0875/ability_0875_W1.webm',
      },
      {
        name: 'Facebreaker',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SettE.png',
        description:
          'Sett pulls in all enemies on opposite sides of him, dealing damage and stunning them. If enemies were only on one side, they are slowed instead of stunned.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0875/ability_0875_E1.webm',
      },
      {
        name: 'The Show Stopper',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SettR.png',
        description:
          'Sett carries an enemy champion through the air and slams them into the ground, dealing damage and slowing all enemies near where they land.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0875/ability_0875_R1.webm',
      },
    ],
    lanes: ['Top'],
    releaseDate: '2020-01-14',
    resource: 'Grit',
    rangeType: 'Melee',
    releasePatch: 'V10.1',
    attackRange: 125,
    region: 'Ionia',
    species: 'Vastayan',
    ratings: {
      damage: 2,
      toughness: 2,
      control: 2,
      mobility: 2,
      utility: 1,
      difficulty: 2,
      style: 40,
      damageBreakdown: {
        magic: 1.6,
        physical: 75.7,
        true_: 22.6,
      },
    },
    spotlightVideoID: 'n-KWeg-9GVU',
    tagArrays: [
      [1, 26, 2, 34, 64, 69],
      [53],
      [53, 99],
      [101],
      [80, 101],
      [80, 29, 102],
    ],
    ids: {
      kebab: 'sett',
      ddragon: 'Sett',
      cdragon: 875,
      wiki: 'Sett',
      universe: 'Sett',
    },
  },
  {
    name: 'Shaco',
    title: 'the Demon Jester',
    roles: ['Assassin'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Shaco.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shaco_0.jpg',
    abilities: [
      {
        name: 'Backstab',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Jester_CarefulStrikes.png',
        description:
          "Shaco's basic attacks and Two-Shiv Poison deal additional damage when striking from behind.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0035/ability_0035_P1.webm',
      },
      {
        name: 'Deceive',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/Deceive.png',
        description:
          'Shaco becomes Invisible and teleports to target location.<br><br>His first attack while Invisible is empowered, dealing bonus damage and critically striking if he attacks from behind.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0035/ability_0035_Q1.webm',
      },
      {
        name: 'Jack In The Box',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/JackInTheBox.png',
        description:
          'Shaco creates a hidden animated Jack-in-the-Box. When triggered, it will fear and attack nearby enemies.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0035/ability_0035_W1.webm',
      },
      {
        name: 'Two-Shiv Poison',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/TwoShivPoison.png',
        description:
          "Shaco's Shivs passively poison targets on hit, slowing their movement speed. He can throw his Shivs to deal damage and poison the target. The thrown Shiv deals bonus damage if the target is below 30% health.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0035/ability_0035_E1.webm',
      },
      {
        name: 'Hallucinate',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/HallucinateFull.png',
        description:
          'Shaco creates an illusion of himself near him, which can attack nearby enemies (Deals reduced damage to turrets).  Upon death, it explodes, spawning three mini Jack in the Boxes and dealing damage to nearby enemies.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0035/ability_0035_R1.webm',
      },
    ],
    lanes: ['Jungle'],
    releaseDate: '2009-10-10',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V0.9.25.34',
    attackRange: 125,
    region: 'Runeterra',
    species: 'Spirit',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 2,
      mobility: 2,
      utility: 2,
      difficulty: 2,
      style: 45,
      damageBreakdown: {
        magic: 55.4,
        physical: 29.9,
        true_: 14.8,
      },
    },
    spotlightVideoID: 'Q9m48jiVWL4',
    tagArrays: [
      [26, 32, 67, 69],
      [53],
      [53, 78, 83, 82, 103],
      [80, 13, 103],
      [102],
      [79, 80, 13, 101],
    ],
    ids: {
      kebab: 'shaco',
      ddragon: 'Shaco',
      cdragon: 35,
      wiki: 'Shaco',
      universe: 'Shaco',
    },
  },
  {
    name: 'Shen',
    title: 'the Eye of Twilight',
    roles: ['Tank'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Shen.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shen_0.jpg',
    abilities: [
      {
        name: 'Ki Barrier',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Shen_Passive.png',
        description:
          'After casting a spell, Shen gets a shield. Affecting other champions reduces the cooldown of this effect.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0098/ability_0098_P1.webm',
      },
      {
        name: 'Twilight Assault',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ShenQ.png',
        description:
          "Shen recalls his spirit blade to attack with it, dealing damage based on the target's max health. The attacks are greatly empowered if it collides with an enemy champion, and all collided enemies are slowed while running away from Shen.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0098/ability_0098_Q1.webm',
      },
      {
        name: "Spirit's Refuge",
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ShenW.png',
        description:
          'Attacks that would hit Shen or his allies near his spirit blade are blocked.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0098/ability_0098_W1.webm',
      },
      {
        name: 'Shadow Dash',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ShenE.png',
        description:
          'Shen dashes in a direction, taunting enemies in his path.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0098/ability_0098_E1.webm',
      },
      {
        name: 'Stand United',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ShenR.png',
        description:
          'Shen shields target allied champion from incoming damage, and soon after teleports to their location.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0098/ability_0098_R1.webm',
      },
    ],
    lanes: ['Top'],
    releaseDate: '2010-03-24',
    resource: 'Energy',
    rangeType: 'Melee',
    releasePatch: 'V1.0.0.81',
    attackRange: 125,
    region: 'Ionia',
    species: 'Human',
    ratings: {
      damage: 2,
      toughness: 3,
      control: 2,
      mobility: 2,
      utility: 3,
      difficulty: 2,
      style: 45,
      damageBreakdown: {
        magic: 49.2,
        physical: 45.9,
        true_: 4.9,
      },
    },
    spotlightVideoID: 'JIIE0LCvGpo',
    tagArrays: [
      [26, 63, 69],
      [],
      [53, 99],
      [99],
      [78, 80, 83, 82, 14, 101],
      [79, 87, 89, 102],
    ],
    ids: {
      kebab: 'shen',
      ddragon: 'Shen',
      cdragon: 98,
      wiki: 'Shen',
      universe: 'Shen',
    },
  },
  {
    name: 'Shyvana',
    title: 'the Half-Dragon',
    roles: ['Fighter', 'Tank'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Shyvana.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shyvana_0.jpg',
    abilities: [
      {
        name: 'Fury of the Dragonborn',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/ShyvanaReinforcedScales.png',
        description:
          'Shyvana deals bonus damage to dragons and gains Armor and Magic Resistance. As Shyvana and her allies slay more dragons, she gains more bonus Armor and Magic Resistance.',
        video: '',
      },
      {
        name: 'Twin Bite',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ShyvanaDoubleAttack.png',
        description:
          "Shyvana strikes twice on her next attack. Basic attacks reduce the cooldown of Twin Bite by 0.5 seconds.<br><br><font color='#FF3300'>Dragon Form: </font>Twin Bite cleaves all units in front of Shyvana.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0102/ability_0102_Q1.webm',
      },
      {
        name: 'Burnout',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ShyvanaImmolationAura.png',
        description:
          "Shyvana surrounds herself in fire, dealing magic damage per second to nearby enemies and moving faster for 3 seconds, part of this damage is applied again when Shyvana basic attacks an enemy with Burnout active. The Movement Speed reduces over the duration of the spell. Basic attacks extend the duration of Burnout. <br><br><font color='#FF3300'>Dragon Form: </font>Burnout grows in size.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0102/ability_0102_W1.webm',
      },
      {
        name: 'Flame Breath',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ShyvanaFireball.png',
        description:
          "Shyvana unleashes a fireball that deals damage to all enemies it encounters and leaves cinders on the target, marking them for 5 seconds. Shyvana's basic attacks on marked targets deal a percentage of their maximum Health as damage on-hit.<br><br><font color='#FF3300'>Dragon Form: </font>Flame Breath explodes on impact or at target location, dealing bonus damage and scorching the earth for a short duration.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0102/ability_0102_E1.webm',
      },
      {
        name: "Dragon's Descent",
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ShyvanaTransformCast.png',
        description:
          'Shyvana transforms into a dragon and takes flight to a target location. Enemies along her path take damage and are knocked toward her target location.<br><br>Shyvana passively gains Fury per second and gains 2 Fury on basic attack.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0102/ability_0102_R1.webm',
      },
    ],
    lanes: ['Jungle'],
    releaseDate: '2011-11-01',
    resource: 'Fury',
    rangeType: 'Melee',
    releasePatch: 'V1.0.0.128',
    attackRange: 125,
    region: 'Demacia',
    species: 'Terrestrial Dragon',
    ratings: {
      damage: 2,
      toughness: 2,
      control: 1,
      mobility: 2,
      utility: 1,
      difficulty: 1,
      style: 55,
      damageBreakdown: {
        magic: 88.4,
        physical: 7.6,
        true_: 4,
      },
    },
    spotlightVideoID: 'Z66n3UYfPE4',
    tagArrays: [
      [4, 34, 64, 69, 71],
      [],
      [53],
      [],
      [53],
      [70, 75, 78, 80, 83, 82, 103],
    ],
    ids: {
      kebab: 'shyvana',
      ddragon: 'Shyvana',
      cdragon: 102,
      wiki: 'Shyvana',
      universe: 'Shyvana',
    },
  },
  {
    name: 'Singed',
    title: 'the Mad Chemist',
    roles: ['Fighter', 'Tank'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Singed.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Singed_0.jpg',
    abilities: [
      {
        name: 'Noxious Slipstream',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Singed_Passive.png',
        description:
          'Singed drafts off nearby champions, gaining a burst of movement speed when passing them.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0027/ability_0027_P1.webm',
      },
      {
        name: 'Poison Trail',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/PoisonTrail.png',
        description:
          'Leaves a trail of poison behind Singed, dealing damage to enemies caught in the path.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0027/ability_0027_Q1.webm',
      },
      {
        name: 'Mega Adhesive',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/MegaAdhesive.png',
        description:
          'Throws a vial of mega adhesive on the ground, slowing and grounding enemies who walk on it.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0027/ability_0027_W1.webm',
      },
      {
        name: 'Fling',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/Fling.png',
        description:
          'Damages target enemy unit and flings them into the air behind Singed. If the target Singed flings lands in his Mega Adhesive, they are also rooted.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0027/ability_0027_E1.webm',
      },
      {
        name: 'Insanity Potion',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/InsanityPotion.png',
        description:
          'Singed drinks a potent brew of chemicals, granting him increased combat stats, and making his Poison Trail apply Grievous Wounds.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0027/ability_0027_R1.webm',
      },
    ],
    lanes: ['Top'],
    releaseDate: '2009-04-18',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V0.7.20.102',
    attackRange: 125,
    region: 'Zaun',
    species: 'Human',
    ratings: {
      damage: 2,
      toughness: 3,
      control: 2,
      mobility: 2,
      utility: 1,
      difficulty: 2,
      style: 100,
      damageBreakdown: {
        magic: 93.7,
        physical: 4.2,
        true_: 2.1,
      },
    },
    spotlightVideoID: 'ZOpT__qwjdQ',
    tagArrays: [[1, 26, 67, 69], [], [99], [19, 103], [80, 27, 102], [99]],
    ids: {
      kebab: 'singed',
      ddragon: 'Singed',
      cdragon: 27,
      wiki: 'Singed',
      universe: 'Singed',
    },
  },
  {
    name: 'Sion',
    title: 'The Undead Juggernaut',
    roles: ['Fighter', 'Tank'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Sion.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sion_0.jpg',
    abilities: [
      {
        name: 'Glory in Death',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Sion_Passive1.png',
        description:
          "After being killed, Sion will temporarily reanimate with rapidly decaying Health. His attacks become very rapid, heal him, and deal bonus damage based on his target's maximum Health.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0014/ability_0014_P1.webm',
      },
      {
        name: 'Decimating Smash',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SionQ.png',
        description:
          'Sion charges a powerful swing in an area in front of himself that will deal damage to enemies when released. If he charges for enough time, enemies hit by the swing will also be knocked up and stunned.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0014/ability_0014_Q1.webm',
      },
      {
        name: 'Soul Furnace',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SionW.png',
        description:
          'Sion shields himself and can reactivate after 3 seconds to deal Magic Damage to enemies nearby. When Sion kills enemies, he passively gains maximum Health.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0014/ability_0014_W1.webm',
      },
      {
        name: 'Roar of the Slayer',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SionE.png',
        description:
          'Sion fires a short range shockwave that damages and slows and reduces the Armor of the first enemy hit. If the shockwave hits a minion or monster, it will be knocked back, damaging, slowing, and reducing the Armor of all enemies that it passes through.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0014/ability_0014_E1.webm',
      },
      {
        name: 'Unstoppable Onslaught',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SionR.png',
        description:
          'Sion charges in a direction, ramping up speed over time. He can steer his charge slightly with the mouse cursor location. When he collides with an enemy he deals damage and knocks them up based on the distance he has charged.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0014/ability_0014_R1.webm',
      },
    ],
    lanes: ['Top'],
    releaseDate: '2009-02-21',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V0.1.0.2',
    attackRange: 175,
    region: 'Noxus',
    species: 'Revenant',
    ratings: {
      damage: 2,
      toughness: 3,
      control: 3,
      mobility: 1,
      utility: 1,
      difficulty: 1,
      style: 65,
      damageBreakdown: {
        magic: 40,
        physical: 59.4,
        true_: 0.6,
      },
    },
    spotlightVideoID: '4mWWFC9SRfA',
    tagArrays: [
      [4, 5, 1, 26, 2, 33, 48, 65, 69],
      [53, 28],
      [80, 90, 101],
      [73, 99],
      [101],
      [79, 80, 89, 101],
    ],
    ids: {
      kebab: 'sion',
      ddragon: 'Sion',
      cdragon: 14,
      wiki: 'Sion',
      universe: 'Sion',
    },
  },
  {
    name: 'Sivir',
    title: 'the Battle Mistress',
    roles: ['Marksman'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Sivir.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sivir_0.jpg',
    abilities: [
      {
        name: 'Fleet of Foot',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Sivir_Passive.png',
        description:
          'Sivir gains a short burst of Movement Speed when she attacks an enemy champion.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0015/ability_0015_P1.webm',
      },
      {
        name: 'Boomerang Blade',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SivirQ.png',
        description:
          'Sivir hurls her crossblade like a boomerang, dealing damage each way.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0015/ability_0015_Q1.webm',
      },
      {
        name: 'Ricochet',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SivirW.png',
        description:
          "Sivir's next few basic attacks will bounce to nearby targets, dealing reduced damage to secondary targets.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0015/ability_0015_W1.webm',
      },
      {
        name: 'Spell Shield',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SivirE.png',
        description:
          'Creates a magical barrier that blocks a single enemy ability cast on Sivir. She receives Mana back if a spell is blocked.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0015/ability_0015_E1.webm',
      },
      {
        name: 'On The Hunt',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SivirR.png',
        description:
          'Sivir leads her allies in battle, granting them a surge Move Speed for a period of time. Additionally passively grants Sivir bonus Attack Speed while Ricochet is active.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0015/ability_0015_R1.webm',
      },
    ],
    lanes: ['Bottom'],
    releaseDate: '2009-02-21',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V0.1.0.2',
    attackRange: 500,
    region: 'Shurima',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 1,
      mobility: 1,
      utility: 2,
      difficulty: 2,
      style: 10,
      damageBreakdown: {
        magic: 2.1,
        physical: 94.1,
        true_: 3.9,
      },
    },
    spotlightVideoID: '6NkXkpHnf30',
    tagArrays: [[38, 67, 68], [55], [101], [53, 99], [99], [100]],
    ids: {
      kebab: 'sivir',
      ddragon: 'Sivir',
      cdragon: 15,
      wiki: 'Sivir',
      universe: 'Sivir',
    },
  },
  {
    name: 'Skarner',
    title: 'the Crystal Vanguard',
    roles: ['Fighter', 'Tank'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Skarner.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Skarner_0.jpg',
    abilities: [
      {
        name: 'Crystal Spires',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Skarner_Passive.png',
        description:
          "Skarner's presence causes crystals to spawn in set locations around the map. Crystals can be captured by either team by standing close to them. When near crystals his team owns, Skarner gains movement speed, attack speed, and increased mana regeneration.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0072/ability_0072_P1.webm',
      },
      {
        name: 'Crystal Slash',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SkarnerVirulentSlash.png',
        description:
          'Skarner lashes out with his claws, dealing physical damage to all nearby enemies and charging himself with Crystal Energy for several seconds if a unit is struck. If he casts Crystal Slash again while powered by Crystal Energy, he deals bonus magic damage.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0072/ability_0072_Q1.webm',
      },
      {
        name: 'Crystalline Exoskeleton',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SkarnerExoskeleton.png',
        description:
          'Skarner gains a shield and has increased Movement Speed while the shield persists.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0072/ability_0072_W1.webm',
      },
      {
        name: 'Fracture',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SkarnerFracture.png',
        description:
          'Skarner summons a blast of crystalline energy which deals damage to enemies struck and slows them. Basic attacking these enemies within a short window will stun them.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0072/ability_0072_E1.webm',
      },
      {
        name: 'Impale',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SkarnerImpale.png',
        description:
          'Skarner suppresses an enemy champion and deals damage to it. During this time, Skarner can move freely and will drag his helpless victim around with him. When the effect ends, the target will be dealt additional damage.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0072/ability_0072_R1.webm',
      },
    ],
    lanes: ['Jungle'],
    releaseDate: '2011-08-09',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V1.0.0.123',
    attackRange: 125,
    region: 'Shurima',
    species: 'Brackern',
    ratings: {
      damage: 1,
      toughness: 3,
      control: 3,
      mobility: 1,
      utility: 1,
      difficulty: 1,
      style: 45,
      damageBreakdown: {
        magic: 41.4,
        physical: 44.3,
        true_: 14.3,
      },
    },
    spotlightVideoID: 'vLxbEDJykcI',
    tagArrays: [
      [26, 2, 67, 69],
      [53],
      [99],
      [99],
      [80, 101],
      [80, 27, 29, 102],
    ],
    ids: {
      kebab: 'skarner',
      ddragon: 'Skarner',
      cdragon: 72,
      wiki: 'Skarner',
      universe: 'Skarner',
    },
  },
  {
    name: 'Sona',
    title: 'Maven of the Strings',
    roles: ['Mage', 'Support'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Sona.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sona_0.jpg',
    abilities: [
      {
        name: 'Power Chord',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Sona_Passive_Charged.png',
        description:
          "<passive>Accelerando</passive>: Sona gains non-Ultimate ability haste permanently for her basic abilities as she uses her abilities well, up to a cap. Beyond that cap, further successful uses reduce her ultimate's remaining cooldown instead.<br><br><passive>Power Chord</passive>: Every few spell casts, Sona's next attack will deal bonus magic damage in addition to an additional effect based on what basic Ability Sona last activated.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0037/ability_0037_P1.webm',
      },
      {
        name: 'Hymn of Valor',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SonaQ.png',
        description:
          'Sona plays the Hymn of Valor, sends out bolts of sound, dealing magic damage to two nearby enemies, prioritizing champions and monsters. Sona gains a temporary aura that grants allies tagged by the zone bonus damage on their next attack against enemies.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0037/ability_0037_Q1.webm',
      },
      {
        name: 'Aria of Perseverance',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SonaW.png',
        description:
          'Sona plays the Aria of Perseverance, sending out protective melodies, healing Sona and a nearby wounded ally. Sona gains a temporary aura that grants allies tagged by the zone a temporary shield.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0037/ability_0037_W1.webm',
      },
      {
        name: 'Song of Celerity',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SonaE.png',
        description:
          'Sona plays the Song of Celerity, granting nearby allies bonus Movement Speed. Sona gains a temporary aura that grants allied champions tagged by the zone bonus Movement Speed.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0037/ability_0037_E1.webm',
      },
      {
        name: 'Crescendo',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SonaR.png',
        description:
          "Sona plays her ultimate chord, stunning enemy champions and forcing them to dance and dealing magic damage to them. Each rank reduces the base cooldown of Sona's basic abilities.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0037/ability_0037_R1.webm',
      },
    ],
    lanes: ['Support'],
    releaseDate: '2010-09-21',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V1.0.0.101',
    attackRange: 550,
    region: 'Demacia',
    species: 'Human',
    ratings: {
      damage: 2,
      toughness: 1,
      control: 2,
      mobility: 1,
      utility: 2,
      difficulty: 1,
      style: 90,
      damageBreakdown: {
        magic: 13.5,
        physical: 84.6,
        true_: 1.8,
      },
    },
    spotlightVideoID: 'JP0A3wLfFBg',
    tagArrays: [[26, 2, 67, 68], [53], [100], [70, 100], [100], [80, 101]],
    ids: {
      kebab: 'sona',
      ddragon: 'Sona',
      cdragon: 37,
      wiki: 'Sona',
      universe: 'Sona',
    },
  },
  {
    name: 'Soraka',
    title: 'the Starchild',
    roles: ['Mage', 'Support'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Soraka.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Soraka_0.jpg',
    abilities: [
      {
        name: 'Salvation',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Soraka_Passive.png',
        description: 'Soraka runs faster towards nearby low health allies.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0016/ability_0016_P1.webm',
      },
      {
        name: 'Starcall',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SorakaQ.png',
        description:
          'A star falls from the sky at the target location dealing magic damage and slowing enemies. If an enemy champion is hit by Starcall, Soraka recovers Health.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0016/ability_0016_Q1.webm',
      },
      {
        name: 'Astral Infusion',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SorakaW.png',
        description:
          'Soraka sacrifices a portion of her own health to heal another friendly champion.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0016/ability_0016_W1.webm',
      },
      {
        name: 'Equinox',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SorakaE.png',
        description:
          'Creates a zone at a location that silences all enemies inside. When the zone expires, all enemies still inside are rooted.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0016/ability_0016_E1.webm',
      },
      {
        name: 'Wish',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SorakaR.png',
        description:
          'Soraka fills her allies with hope, instantly restoring health to herself and all friendly champions.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0016/ability_0016_R1.webm',
      },
    ],
    lanes: ['Support'],
    releaseDate: '2009-02-21',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V0.1.0.2',
    attackRange: 550,
    region: 'Targon',
    species: 'Celestial',
    ratings: {
      damage: 1,
      toughness: 1,
      control: 2,
      mobility: 1,
      utility: 3,
      difficulty: 1,
      style: 100,
      damageBreakdown: {
        magic: 88.2,
        physical: 8.4,
        true_: 3.3,
      },
    },
    spotlightVideoID: 'KJ6f1nsoUTs',
    tagArrays: [[26, 65, 68], [], [103], [102], [80, 22, 27, 103], [87, 100]],
    ids: {
      kebab: 'soraka',
      ddragon: 'Soraka',
      cdragon: 16,
      wiki: 'Soraka',
      universe: 'Soraka',
    },
  },
  {
    name: 'Swain',
    title: 'the Noxian Grand General',
    roles: ['Fighter', 'Mage'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Swain.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Swain_0.jpg',
    abilities: [
      {
        name: 'Ravenous Flock',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Swain_P.png',
        description:
          "Swain's ravens collect <i>Soul Fragments</i> that heal him and permanently increase his maximum health. Swain can right-click an immobilized enemy champions to pull them closer to him, dealing damage and ripping out a <i>Soul Fragment</i>.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0050/ability_0050_P1.webm',
      },
      {
        name: "Death's Hand",
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SwainQ.png',
        description:
          'Swain unleashes several bolts of eldritch power that pierce through enemies. Enemies hit take more damage for each bolt they are struck by.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0050/ability_0050_Q1.webm',
      },
      {
        name: 'Vision of Empire',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SwainW.png',
        description:
          'Swain opens a demon eye that deals damage and slows enemies. Champions hit are revealed and also grant Swain a Soul Fragment.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0050/ability_0050_W1.webm',
      },
      {
        name: 'Nevermove',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SwainE.png',
        description:
          'Swain launches a wave of demonic power forward. It then returns to Swain and roots enemies it hits.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0050/ability_0050_E1.webm',
      },
      {
        name: 'Demonic Ascension',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SwainR.png',
        description:
          'Swain transforms into a demon and drains health from nearby enemy champions, minions, and neutral monsters. Swain can cast Demonflare to decimate nearby enemies with a nova of soulfire, dealing damage equal to a portion of the health he drained and ending his transformation.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0050/ability_0050_R1.webm',
      },
    ],
    lanes: ['Support', 'Middle'],
    releaseDate: '2010-10-05',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V1.0.0.102',
    attackRange: 525,
    region: 'Noxus',
    species: 'Human',
    ratings: {
      damage: 2,
      toughness: 2,
      control: 2,
      mobility: 1,
      utility: 1,
      difficulty: 2,
      style: 100,
      damageBreakdown: {
        magic: 92.2,
        physical: 5.2,
        true_: 2.6,
      },
    },
    spotlightVideoID: 'Utt-sd2FJNY',
    tagArrays: [
      [1, 26, 67, 68],
      [73, 86],
      [101],
      [97, 103],
      [80, 27, 101],
      [91, 99],
    ],
    ids: {
      kebab: 'swain',
      ddragon: 'Swain',
      cdragon: 50,
      wiki: 'Swain',
      universe: 'Swain',
    },
  },
  {
    name: 'Sylas',
    title: 'the Unshackled',
    roles: ['Assassin', 'Mage'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Sylas.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sylas_0.jpg',
    abilities: [
      {
        name: 'Petricite Burst',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/SylasP.png',
        description:
          "After casting a spell, Sylas stores a charge of Petricite Burst.  Sylas's basic attacks will expend a charge and whirl his energized chains around him dealing bonus magic damage to enemies hit. While Sylas has a charge of Petricite Burst, he gains attack speed. ",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0517/ability_0517_P1.webm',
      },
      {
        name: 'Chain Lash',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SylasQ.png',
        description:
          'Sylas lashes his chains out, intersecting at his targeted location dealing damage to and slowing enemies. <br><br>After a delay, magical energy explodes from the intersection point dealing damage.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0517/ability_0517_Q1.webm',
      },
      {
        name: 'Kingslayer',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SylasW.png',
        description:
          'Sylas lunges at an enemy with magical force dealing damage and healing himself against enemy champions.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0517/ability_0517_W1.webm',
      },
      {
        name: 'Abscond / Abduct',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SylasE.png',
        description:
          'Sylas dashes to a location. Sylas can recast the ability to throw his chains out, pulling himself to an enemy he hits.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0517/ability_0517_E1.webm',
      },
      {
        name: 'Hijack',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SylasR.png',
        description:
          "Sylas steals the enemy's ultimate ability and can cast it freely.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0517/ability_0517_R1.webm',
      },
    ],
    lanes: ['Jungle', 'Middle'],
    releaseDate: '2019-01-25',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V9.2',
    attackRange: 175,
    region: 'Demacia',
    species: 'Human',
    ratings: {
      damage: 2,
      toughness: 2,
      control: 1,
      mobility: 3,
      utility: 1,
      difficulty: 3,
      style: 70,
      damageBreakdown: {
        magic: 94.9,
        physical: 4.4,
        true_: 0.7,
      },
    },
    spotlightVideoID: '3U4WdutoYbI',
    tagArrays: [
      [5, 26, 2, 67, 69],
      [56],
      [103],
      [78, 83, 82, 102],
      [78, 80, 83, 82, 91, 101],
      [72, 102],
    ],
    ids: {
      kebab: 'sylas',
      ddragon: 'Sylas',
      cdragon: 517,
      wiki: 'Sylas',
      universe: 'Sylas',
    },
  },
  {
    name: 'Syndra',
    title: 'the Dark Sovereign',
    roles: ['Mage', 'Support'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Syndra.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Syndra_0.jpg',
    abilities: [
      {
        name: 'Transcendent',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/SyndraPassive.png',
        description:
          "Syndra's spells gain extra effects at max rank.<br><br><font color='#FF9900'>Dark Sphere</font>: Bonus damage against champions.<br><font color='#FF9900'>Force of Will</font>: Bonus true damage.<br><font color='#FF9900'>Scatter the Weak</font>: Increased width.<br><font color='#FF9900'>Unleashed Power</font>: Increased range.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0134/ability_0134_P1.webm',
      },
      {
        name: 'Dark Sphere',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SyndraQ.png',
        description:
          'Syndra conjures a Dark Sphere dealing magic damage. The sphere remains and can be manipulated by her other powers.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0134/ability_0134_Q1.webm',
      },
      {
        name: 'Force of Will',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SyndraW.png',
        description:
          'Syndra picks up and throws a Dark Sphere or enemy minion dealing magic damage and slowing the Movement Speed of enemies.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0134/ability_0134_W1.webm',
      },
      {
        name: 'Scatter the Weak',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SyndraE.png',
        description:
          'Syndra knocks enemies and Dark Spheres back dealing magic damage. Enemies hit by Dark Spheres become stunned.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0134/ability_0134_E1.webm',
      },
      {
        name: 'Unleashed Power',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/SyndraR.png',
        description:
          'Syndra bombards an enemy Champion with all of her Dark Spheres.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0134/ability_0134_R1.webm',
      },
    ],
    lanes: ['Middle'],
    releaseDate: '2012-09-13',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V1.0.0.147',
    attackRange: 550,
    region: 'Ionia',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 2,
      mobility: 1,
      utility: 1,
      difficulty: 2,
      style: 100,
      damageBreakdown: {
        magic: 94.5,
        physical: 4.6,
        true_: 0.9,
      },
    },
    spotlightVideoID: 'YqI7N2R8tx4',
    tagArrays: [
      [4, 26, 2, 67, 68],
      [75],
      [103],
      [28, 91, 102],
      [80, 101],
      [102],
    ],
    ids: {
      kebab: 'syndra',
      ddragon: 'Syndra',
      cdragon: 134,
      wiki: 'Syndra',
      universe: 'Syndra',
    },
  },
  {
    name: 'Tahm Kench',
    title: 'The River King',
    roles: ['Tank', 'Support'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/TahmKench.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/TahmKench_0.jpg',
    abilities: [
      {
        name: 'An Acquired Taste',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/TahmKenchP.png',
        description:
          'Tahm Kench puts the heft of his immense body behind his attacks, gaining extra damage based on his total health. Damaging enemy champions builds stacks of <spellName>An Acquired Taste</spellName>. At three stacks, he can use <spellName>Devour</spellName> on an enemy champion.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0223/ability_0223_P1.webm',
      },
      {
        name: 'Tongue Lash',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/TahmKenchQ.png',
        description:
          'Tahm Kench lashes out with his tongue, damaging and slowing the first unit hit and healing himself it he strikes an enemy champion.<br><br>Applies a stack of  <spellName>An Acquired Taste</spellName> to enemy champions. If the champion already has 3 stacks of <spellName>An Acquired Taste</spellName>, they are stunned and the stacks are consumed.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0223/ability_0223_Q1.webm',
      },
      {
        name: 'Abyssal Dive',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/TahmKenchW.png',
        description:
          'Dive down and then re-appear at target location, damaging and knocking up all enemies in an area.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0223/ability_0223_W1.webm',
      },
      {
        name: 'Thick Skin',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/TahmKenchE.png',
        description:
          '<passive>Passive:</passive> Tahm Kench stores a percent of the damage he takes and heals based on it while out of combat.<br><br><active>Active:</active> Convert all stored damage into a temporary shield.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0223/ability_0223_E1.webm',
      },
      {
        name: 'Devour',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/TahmKenchRWrapper.png',
        description:
          'Tahm Kench devours a champion for a few seconds, dealing magic damage if they are an enemy, or shielding them if they are an ally.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0223/ability_0223_R1.webm',
      },
    ],
    lanes: ['Top'],
    releaseDate: '2015-07-09',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V5.13',
    attackRange: 175,
    region: 'Runeterra',
    species: 'Demon',
    ratings: {
      damage: 2,
      toughness: 3,
      control: 2,
      mobility: 1,
      utility: 3,
      difficulty: 1,
      style: 65,
      damageBreakdown: {
        magic: 86,
        physical: 11.6,
        true_: 2.4,
      },
    },
    spotlightVideoID: 'VYlOFKLmiHA',
    tagArrays: [
      [4, 5, 26, 2, 32, 34, 67, 69],
      [53],
      [80, 101],
      [78, 80, 83, 82, 89, 91, 103],
      [99],
      [80, 19, 22, 29, 91, 102],
    ],
    ids: {
      kebab: 'tahm-kench',
      ddragon: 'TahmKench',
      cdragon: 223,
      wiki: 'Tahm_Kench',
      universe: 'TahmKench',
    },
  },
  {
    name: 'Taliyah',
    title: 'the Stoneweaver',
    roles: ['Mage', 'Support'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Taliyah.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taliyah_0.jpg',
    abilities: [
      {
        name: 'Rock Surfing',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Taliyah_Passive.png',
        description: 'Taliyah gains movement speed near walls.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0163/ability_0163_P1.webm',
      },
      {
        name: 'Threaded Volley',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/TaliyahQ.png',
        description:
          'Taliyah throws a volley of missiles in a target direction, moving freely as she does. This works the ground below her. If Taliyah casts Threaded Volley on worked ground, she only throws one missile.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0163/ability_0163_Q1.webm',
      },
      {
        name: 'Seismic Shove',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/TaliyahWVC.png',
        description:
          'Taliyah causes an area of ground to erupt and throws enemies within in a direction of her choosing.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0163/ability_0163_W1.webm',
      },
      {
        name: 'Unraveled Earth',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/TaliyahE.png',
        description:
          'Taliyah creates a slowing minefield that explodes if enemies dash through it or are pushed/pulled through it.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0163/ability_0163_E1.webm',
      },
      {
        name: "Weaver's Wall",
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/TaliyahR.png',
        description: 'Taliyah creates a very long wall and then surfs it.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0163/ability_0163_R1.webm',
      },
    ],
    lanes: ['Jungle', 'Middle'],
    releaseDate: '2016-05-18',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V6.10',
    attackRange: 525,
    region: 'Shurima',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 2,
      mobility: 1,
      utility: 3,
      difficulty: 2,
      style: 100,
      damageBreakdown: {
        magic: 89.8,
        physical: 3.4,
        true_: 6.8,
      },
    },
    spotlightVideoID: '3-XQ0Jb2MRs',
    tagArrays: [[4, 5, 26, 67, 68], [], [101], [], [80, 101], [3, 89, 97, 101]],
    ids: {
      kebab: 'taliyah',
      ddragon: 'Taliyah',
      cdragon: 163,
      wiki: 'Taliyah',
      universe: 'Taliyah',
    },
  },
  {
    name: 'Talon',
    title: "the Blade's Shadow",
    roles: ['Assassin'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Talon.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Talon_0.jpg',
    abilities: [
      {
        name: "Blade's End",
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/TalonP.png',
        description:
          "Talon's spells Wound champions and large monsters, stacking up to 3 times. When Talon attacks a champion with 3 stacks of Wound, they bleed for heavy damage over time.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0091/ability_0091_P1.webm',
      },
      {
        name: 'Noxian Diplomacy',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/TalonQ.png',
        description:
          'Talon stabs the target unit. If they are within melee range, this attack deals critical damage. If they are outside melee range, Talon will leap at his target before stabbing them. Talon refunds some health and cooldown if this ability kills the target.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0091/ability_0091_Q1.webm',
      },
      {
        name: 'Rake',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/TalonW.png',
        description:
          'Talon sends out a volley of daggers that then return back to him, dealing physical damage every time it passes through an enemy. The returning blades deal bonus damage and slow units hit.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0091/ability_0091_W1.webm',
      },
      {
        name: "Assassin's Path",
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/TalonE.png',
        description:
          'Talon vaults over any terrain or structure, up to a max distance. This ability has a low cooldown, but puts the used terrain on a long cooldown.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0091/ability_0091_E1.webm',
      },
      {
        name: 'Shadow Assault',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/TalonR.png',
        description:
          'Talon disperses a ring of blades and becomes Invisible while gaining additional Movement Speed. When Talon emerges from Invisibility, the blades converge on his location. Each time the blades move, Shadow Assault deals physical damage to enemies hit by at least one blade.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0091/ability_0091_R1.webm',
      },
    ],
    lanes: ['Middle'],
    releaseDate: '2011-08-24',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V1.0.0.124',
    attackRange: 125,
    region: 'Noxus',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 1,
      mobility: 2,
      utility: 1,
      difficulty: 2,
      style: 65,
      damageBreakdown: {
        magic: 0.9,
        physical: 92.1,
        true_: 7,
      },
    },
    spotlightVideoID: 'eKdX7aB3TRk',
    tagArrays: [
      [26, 67, 69],
      [54],
      [83, 82, 102],
      [101],
      [78, 83, 82, 102],
      [99],
    ],
    ids: {
      kebab: 'talon',
      ddragon: 'Talon',
      cdragon: 91,
      wiki: 'Talon',
      universe: 'Talon',
    },
  },
  {
    name: 'Taric',
    title: 'the Shield of Valoran',
    roles: ['Fighter', 'Support'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Taric.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taric_0.jpg',
    abilities: [
      {
        name: 'Bravado',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Taric_Passive.png',
        description:
          "Spellcasts empower Taric's next 2 basic attacks to deal bonus magic damage, reduce his spell cooldowns, and attack in quick succession.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0044/ability_0044_P1.webm',
      },
      {
        name: "Starlight's Touch",
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/TaricQ.png',
        description:
          "Heals nearby allied champions based on charges stored. Bravado-empowered attacks grant a charge of Starlight's Touch.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0044/ability_0044_Q1.webm',
      },
      {
        name: 'Bastion',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/TaricW.png',
        description:
          "Passively increase the Armor of Taric and any allied champion with Bastion.<br><br>Actively shields an ally and grants them Bastion for as long as they remain near Taric. Taric's spells also cast off the ally with Bastion.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0044/ability_0044_W1.webm',
      },
      {
        name: 'Dazzle',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/TaricE.png',
        description:
          'Taric readies a beam of starlight that, after a brief delay, deals magic damage and stuns enemies.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0044/ability_0044_E1.webm',
      },
      {
        name: 'Cosmic Radiance',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/TaricR.png',
        description:
          'Pulses cosmic energy onto nearby allied champions after a delay, making them invulnerable for a short duration.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0044/ability_0044_R1.webm',
      },
    ],
    lanes: ['Support'],
    releaseDate: '2009-08-19',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V0.9.22.15',
    attackRange: 150,
    region: 'Targon',
    species: 'Aspect Host',
    ratings: {
      damage: 1,
      toughness: 2,
      control: 2,
      mobility: 1,
      utility: 3,
      difficulty: 2,
      style: 75,
      damageBreakdown: {
        magic: 66.1,
        physical: 24.7,
        true_: 9.2,
      },
    },
    spotlightVideoID: 'Y91qo99osLI',
    tagArrays: [[2, 31, 67, 69], [53], [105, 99], [102], [80, 101], [99]],
    ids: {
      kebab: 'taric',
      ddragon: 'Taric',
      cdragon: 44,
      wiki: 'Taric',
      universe: 'Taric',
    },
  },
  {
    name: 'Teemo',
    title: 'the Swift Scout',
    roles: ['Assassin', 'Marksman'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Teemo.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Teemo_0.jpg',
    abilities: [
      {
        name: 'Guerrilla Warfare',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Teemo_P.png',
        description:
          "If Teemo stands still and takes no actions for a short duration, he becomes Invisible indefinitely. If he's in brush, Teemo can enter and maintain his Invisibility while moving. After leaving Invisibility, Teemo gains the Element of Surprise, increasing his Attack Speed for a few seconds.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0017/ability_0017_P1.webm',
      },
      {
        name: 'Blinding Dart',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/BlindingDart.png',
        description:
          "Obscures an enemy's vision with a powerful venom, dealing damage to the target unit and blinding it for the duration.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0017/ability_0017_Q1.webm',
      },
      {
        name: 'Move Quick',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/MoveQuick.png',
        description:
          "Teemo scampers around, passively increasing his Move Speed until he is struck by an enemy champion or turret. Teemo can sprint to gain bonus Move Speed that isn't stopped by being struck for a short time.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0017/ability_0017_W1.webm',
      },
      {
        name: 'Toxic Shot',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ToxicShot.png',
        description:
          "Each of Teemo's attacks will poison the target, dealing damage on impact and each second after for 4 seconds.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0017/ability_0017_E1.webm',
      },
      {
        name: 'Noxious Trap',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/TeemoRCast.png',
        description:
          'Teemo throws an explosive poisonous trap using one of the mushrooms stored in his pack. If an enemy steps on the trap, it will release a poisonous cloud, slowing enemies and damaging them over time. If Teemo throws a mushroom onto another mushroom it will bounce, gaining additional range.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0017/ability_0017_R1.webm',
      },
    ],
    lanes: ['Top'],
    releaseDate: '2009-02-21',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V0.1.0.2',
    attackRange: 500,
    region: 'Bandle City',
    species: 'Yordle',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 2,
      mobility: 1,
      utility: 2,
      difficulty: 1,
      style: 30,
      damageBreakdown: {
        magic: 67.6,
        physical: 24.4,
        true_: 8,
      },
    },
    spotlightVideoID: 'Qj48qHM1MXE',
    tagArrays: [
      [26, 67, 68],
      [],
      [30, 102],
      [99],
      [53, 54, 93, 98],
      [105, 103],
    ],
    ids: {
      kebab: 'teemo',
      ddragon: 'Teemo',
      cdragon: 17,
      wiki: 'Teemo',
      universe: 'Teemo',
    },
  },
  {
    name: 'Thresh',
    title: 'the Chain Warden',
    roles: ['Fighter', 'Support'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Thresh.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_0.jpg',
    abilities: [
      {
        name: 'Damnation',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Thresh_Passive.png',
        description:
          'Thresh can harvest the souls of enemies that die near him, permanently granting him Armor and Ability Power.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0412/ability_0412_P1.webm',
      },
      {
        name: 'Death Sentence',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ThreshQ.png',
        description:
          'Thresh binds an enemy in chains and pulls them toward him. Activating this ability a second time pulls Thresh to the enemy.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0412/ability_0412_Q1.webm',
      },
      {
        name: 'Dark Passage',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ThreshW.png',
        description:
          'Thresh throws out a lantern that shields nearby allied Champions from damage. Allies can click the lantern to dash to Thresh.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0412/ability_0412_W1.webm',
      },
      {
        name: 'Flay',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ThreshE.png',
        description:
          "Thresh's attacks wind up, dealing more damage the longer he waits between attacks. When activated, Thresh sweeps his chain, knocking all enemies hit in the direction of the blow.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0412/ability_0412_E1.webm',
      },
      {
        name: 'The Box',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ThreshRPenta.png',
        description: 'A prison of walls that slow and deal damage if broken.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0412/ability_0412_R1.webm',
      },
    ],
    lanes: ['Support'],
    releaseDate: '2013-01-23',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V1.0.0.154',
    attackRange: 450,
    region: 'Shadow Isles',
    species: 'Wraith',
    ratings: {
      damage: 1,
      toughness: 2,
      control: 3,
      mobility: 1,
      utility: 3,
      difficulty: 3,
      style: 75,
      damageBreakdown: {
        magic: 74.3,
        physical: 13.1,
        true_: 12.6,
      },
    },
    spotlightVideoID: 'Sv95nBi7ulQ',
    tagArrays: [
      [4, 1, 26, 67, 68],
      [73, 88],
      [78, 80, 83, 82, 91, 101],
      [103],
      [53, 80, 101],
      [99],
    ],
    ids: {
      kebab: 'thresh',
      ddragon: 'Thresh',
      cdragon: 412,
      wiki: 'Thresh',
      universe: 'Thresh',
    },
  },
  {
    name: 'Tristana',
    title: 'the Yordle Gunner',
    roles: ['Assassin', 'Marksman'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Tristana.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Tristana_0.jpg',
    abilities: [
      {
        name: 'Draw a Bead',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Tristana_Passive.png',
        description: "Increases Tristana's Attack Range as she levels.",
        video: '',
      },
      {
        name: 'Rapid Fire',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/TristanaQ.png',
        description:
          'Tristana fires her weapon rapidly, increasing her Attack Speed for a short time.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0018/ability_0018_Q1.webm',
      },
      {
        name: 'Rocket Jump',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/TristanaW.png',
        description:
          'Tristana fires at the ground to propel her to a distant location, dealing damage and slowing surrounding units for a brief period where she lands.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0018/ability_0018_W1.webm',
      },
      {
        name: 'Explosive Charge',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/TristanaE.png',
        description:
          'When Tristana kills a unit, her cannonballs burst into shrapnel, dealing damage to surrounding enemies. Can be activated to place a bomb on a target enemy that explodes after a short duration dealing damage to surrounding units.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0018/ability_0018_E1.webm',
      },
      {
        name: 'Buster Shot',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/TristanaR.png',
        description:
          'Tristana loads a massive cannonball into her weapon and fires it at an enemy unit. This deals Magic Damage and knocks the target back. If the target is carrying the Explosive Charge bomb, the bomb detonation radius is doubled.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0018/ability_0018_R1.webm',
      },
    ],
    lanes: ['Bottom'],
    releaseDate: '2009-02-21',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V0.1.0.2',
    attackRange: 525,
    region: 'Bandle City',
    species: 'Yordle',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 2,
      mobility: 2,
      utility: 1,
      difficulty: 1,
      style: 20,
      damageBreakdown: {
        magic: 10.3,
        physical: 78.2,
        true_: 11.4,
      },
    },
    spotlightVideoID: '633CHC6TTYY',
    tagArrays: [
      [4, 26, 67, 68],
      [],
      [99],
      [78, 83, 82, 88, 94, 103],
      [53, 102],
      [80, 102],
    ],
    ids: {
      kebab: 'tristana',
      ddragon: 'Tristana',
      cdragon: 18,
      wiki: 'Tristana',
      universe: 'Tristana',
    },
  },
  {
    name: 'Trundle',
    title: 'the Troll King',
    roles: ['Fighter', 'Tank'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Trundle.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Trundle_0.jpg',
    abilities: [
      {
        name: "King's Tribute",
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Trundle_Passive.png',
        description:
          'When an enemy unit dies near Trundle, he heals for a percent of its maximum Health.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0048/ability_0048_P1.webm',
      },
      {
        name: 'Chomp',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/TrundleTrollSmash.png',
        description:
          'Trundle bites his opponent, dealing damage, briefly slowing and sapping some of their Attack Damage.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0048/ability_0048_Q1.webm',
      },
      {
        name: 'Frozen Domain',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/trundledesecrate.png',
        description:
          'Trundle turns target location into his domain, gaining Attack Speed, Movement Speed, and increased healing from all sources while on it.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0048/ability_0048_W1.webm',
      },
      {
        name: 'Pillar of Ice',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/TrundleCircle.png',
        description:
          'Trundle creates an ice pillar at target location, becoming impassable terrain and slowing all nearby enemy units.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0048/ability_0048_E1.webm',
      },
      {
        name: 'Subjugate',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/TrundlePain.png',
        description:
          "Trundle immediately steals a percent of his target's Health, Armor and Magic Resistance. Over the next 4 seconds the amount of Health, Armor, and Magic Resistance stolen is doubled.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0048/ability_0048_R1.webm',
      },
    ],
    lanes: ['Jungle'],
    releaseDate: '2010-12-01',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V1.0.0.106',
    attackRange: 175,
    region: 'Freljord',
    species: 'Troll',
    ratings: {
      damage: 2,
      toughness: 3,
      control: 1,
      mobility: 1,
      utility: 2,
      difficulty: 1,
      style: 20,
      damageBreakdown: {
        magic: 22.5,
        physical: 70.3,
        true_: 7.2,
      },
    },
    spotlightVideoID: 'cg0-Kw9Iozw',
    tagArrays: [[4, 26, 67, 69], [], [53, 99], [103], [80, 103], [102]],
    ids: {
      kebab: 'trundle',
      ddragon: 'Trundle',
      cdragon: 48,
      wiki: 'Trundle',
      universe: 'Trundle',
    },
  },
  {
    name: 'Tryndamere',
    title: 'the Barbarian King',
    roles: ['Fighter', 'Assassin'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Tryndamere.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Tryndamere_0.jpg',
    abilities: [
      {
        name: 'Battle Fury',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Tryndamere_Passive.png',
        description:
          'Tryndamere gains Fury for each attack, critical strike, and killing blow he makes. Fury passively increases his Critical Strike Chance and can be consumed with his Bloodlust spell.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0023/ability_0023_P1.webm',
      },
      {
        name: 'Bloodlust',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/TryndamereQ.png',
        description:
          'Tryndamere thrives on the thrills of combat, increasing his Attack Damage as he is more and more wounded. He can cast Bloodlust to consume his Fury and heal himself.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0023/ability_0023_Q1.webm',
      },
      {
        name: 'Mocking Shout',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/TryndamereW.png',
        description:
          "Tryndamere lets out an insulting cry, decreasing surrounding champions' Attack Damage. Enemies with their backs turned to Tryndamere also have their Movement Speed reduced.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0023/ability_0023_W1.webm',
      },
      {
        name: 'Spinning Slash',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/TryndamereE.png',
        description:
          'Tryndamere slices toward a target unit, dealing damage to enemies in his path.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0023/ability_0023_E1.webm',
      },
      {
        name: 'Undying Rage',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/UndyingRage.png',
        description:
          "Tryndamere's lust for battle becomes so strong that he is unable to die, no matter how wounded he becomes.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0023/ability_0023_R1.webm',
      },
    ],
    lanes: ['Top'],
    releaseDate: '2009-05-01',
    resource: 'Fury',
    rangeType: 'Melee',
    releasePatch: 'V0.7.20.104',
    attackRange: 125,
    region: 'Freljord',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 2,
      control: 1,
      mobility: 2,
      utility: 1,
      difficulty: 1,
      style: 10,
      damageBreakdown: {
        magic: 4.3,
        physical: 90.8,
        true_: 4.9,
      },
    },
    spotlightVideoID: 'VmXEnxyVcs0',
    tagArrays: [[26, 64, 69], [], [99], [99], [78, 83, 82, 101], [99]],
    ids: {
      kebab: 'tryndamere',
      ddragon: 'Tryndamere',
      cdragon: 23,
      wiki: 'Tryndamere',
      universe: 'Tryndamere',
    },
  },
  {
    name: 'Twisted Fate',
    title: 'the Card Master',
    roles: ['Mage'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/TwistedFate.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/TwistedFate_0.jpg',
    abilities: [
      {
        name: 'Loaded Dice',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Cardmaster_SealFate.png',
        description:
          "Upon killing a unit, Twisted Fate rolls his 'lucky' dice receiving 1 to 6 bonus gold.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0004/ability_0004_P1.webm',
      },
      {
        name: 'Wild Cards',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/WildCards.png',
        description:
          'Twisted Fate throws three cards, dealing damage to each enemy unit they pass through.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0004/ability_0004_Q1.webm',
      },
      {
        name: 'Pick a Card',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/PickACard.png',
        description:
          'Twisted Fate chooses a magic card from his deck, and uses that for his next attack, causing bonus effects.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0004/ability_0004_W1.webm',
      },
      {
        name: 'Stacked Deck',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/CardmasterStack.png',
        description:
          'Every 4 attacks, Twisted Fate deals bonus damage. In addition, his Attack Speed is increased.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0004/ability_0004_E1.webm',
      },
      {
        name: 'Destiny',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/Destiny.png',
        description:
          'Twisted Fate predicts the fortunes of his foes, revealing all enemy champions and enabling the use of Gate, which teleports Twisted Fate to any target location in 1.5 seconds.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0004/ability_0004_R1.webm',
      },
    ],
    lanes: ['Middle'],
    releaseDate: '2009-02-21',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V0.1.0.2',
    attackRange: 525,
    region: 'Bilgewater',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 2,
      mobility: 2,
      utility: 2,
      difficulty: 2,
      style: 65,
      damageBreakdown: {
        magic: 88,
        physical: 9.8,
        true_: 2.2,
      },
    },
    spotlightVideoID: 'B8Ai_Aw-5fc',
    tagArrays: [
      [26, 2, 67, 68],
      [96],
      [101],
      [52, 56, 80, 91, 95, 99],
      [53, 88, 93, 98],
      [89, 87, 97, 99, 103],
    ],
    ids: {
      kebab: 'twisted-fate',
      ddragon: 'TwistedFate',
      cdragon: 4,
      wiki: 'Twisted_Fate',
      universe: 'TwistedFate',
    },
  },
  {
    name: 'Twitch',
    title: 'the Plague Rat',
    roles: ['Assassin', 'Marksman'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Twitch.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Twitch_0.jpg',
    abilities: [
      {
        name: 'Deadly Venom',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Twitch_Passive.png',
        description:
          "Twitch's basic attacks infect the target, dealing true damage each second.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0029/ability_0029_P1.webm',
      },
      {
        name: 'Ambush',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/TwitchHideInShadows.png',
        description:
          "Twitch becomes Camouflaged for a short duration and gains Move Speed. When leaving Camouflage, Twitch gains Attack Speed for a short duration.<br><br>When an enemy champion with Deadly Venom dies, Ambush's cooldown is reset.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0029/ability_0029_Q1.webm',
      },
      {
        name: 'Venom Cask',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/TwitchVenomCask.png',
        description:
          'Twitch hurls a cask of venom that explodes in an area, slowing targets and applying deadly venom to the target.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0029/ability_0029_W1.webm',
      },
      {
        name: 'Contaminate',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/TwitchExpunge.png',
        description:
          'Twitch wreaks further havoc on poisoned enemies with a blast of his vile diseases.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0029/ability_0029_E1.webm',
      },
      {
        name: 'Spray and Pray',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/TwitchFullAutomatic.png',
        description:
          'Twitch unleashes the full power of his crossbow, shooting bolts over a great distance that pierce all enemies caught in their path.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0029/ability_0029_R1.webm',
      },
    ],
    lanes: ['Bottom'],
    releaseDate: '2009-05-01',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V0.7.20.104',
    attackRange: 550,
    region: 'Zaun',
    species: 'Plague Rat',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 1,
      mobility: 2,
      utility: 1,
      difficulty: 2,
      style: 0,
      damageBreakdown: {
        magic: 14.1,
        physical: 63.6,
        true_: 22.3,
      },
    },
    spotlightVideoID: 'cFtH_wFJBLs',
    tagArrays: [[26, 67, 68], [54], [94, 88, 99], [103], [100], [99]],
    ids: {
      kebab: 'twitch',
      ddragon: 'Twitch',
      cdragon: 29,
      wiki: 'Twitch',
      universe: 'Twitch',
    },
  },
  {
    ids: {
      cdragon: 77,
      ddragon: 'Udyr',
      kebab: 'udyr',
      universe: 'Udyr',
      wiki: 'Udyr',
    },
    name: 'Udyr',
    title: 'the Spirit Walker',
    roles: ['Fighter', 'Tank'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/Udyr.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Udyr_0.jpg',
    resource: 'Mana',
    attackRange: 125,
    abilities: [
      {
        name: 'Bridge Between',
        img: 'https://ddragon.leagueoflegends.com/cdn/12.17.1/img/passive/Udyr_P.UdyrVGU.png',
        description:
          "Udyr has four basic Abilities that swap between Stances and can Recast an Ability to renew it with additional benefits. Additionally, after using an Ability, Udyr's next two Attacks gain Attack Speed.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0077/ability_0077_P1.webm',
      },
      {
        name: 'Wilding Claw',
        img: 'https://ddragon.leagueoflegends.com/cdn/12.17.1/img/spell/UdyrQ.png',
        description:
          'Udyr gains attacks and his next two attack deal bonus physical damage. Recast: Gain even more attack speed, and next two attacks call lightning to strike the target.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0077/ability_0077_Q1.webm',
      },
      {
        name: 'Iron Mantle',
        img: 'https://ddragon.leagueoflegends.com/cdn/12.17.1/img/spell/UdyrW.png',
        description:
          'Udyr gains a shield and his next two attacks heal him. Recast: Gain an even bigger shield and heal based on max health over the next couple seconds.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0077/ability_0077_W1.webm',
      },
      {
        name: 'Blazing Stampede',
        img: 'https://ddragon.leagueoflegends.com/cdn/12.17.1/img/spell/UdyrE.png',
        description:
          'Udyr gains movement speed and his first attack against each target will Stun them. Recast: Gain even more movement speed and immunity to immobilizing effects for a couple seconds. ',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0077/ability_0077_E1.webm',
      },
      {
        name: 'Wingborne Storm',
        img: 'https://ddragon.leagueoflegends.com/cdn/12.17.1/img/spell/UdyrR.png',
        description:
          'Udyr surrounds himself in a glacial storm, damaging and slowing nearby enemies. Recast: Empower and unleash the storm, causing it to track enemies and deal additional damage.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0077/ability_0077_R1.webm',
      },
    ],
    ratings: {
      difficulty: 2,
      style: 40,
      damage: 2,
      toughness: 3,
      control: 2,
      mobility: 2,
      utility: 1,
      damageBreakdown: {
        physical: 33.7,
        magic: 53.6,
        true_: 12.7,
      },
    },
    tagArrays: [[], [], [], [], [], []],
    lanes: ['Jungle'],
    rangeType: 'Melee',
    releaseDate: '2009-12-02',
    releasePatch: 'V1.0.0.61',
    region: 'Freljord',
    species: 'Human',
    spotlightVideoID: 'kfyDoF658HA',
  },
  {
    name: 'Urgot',
    title: 'the Dreadnought',
    roles: ['Fighter', 'Tank'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Urgot.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Urgot_0.jpg',
    abilities: [
      {
        name: 'Echoing Flames',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Urgot_Passive.png',
        description:
          "Urgot's basic attacks and Purge periodically trigger blasts of flame from his legs, dealing physical damage.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0006/ability_0006_P1.webm',
      },
      {
        name: 'Corrosive Charge',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/UrgotQ.png',
        description:
          'Fires an explosive charge at the target location, dealing physical damage and slowing enemies caught in the explosion.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0006/ability_0006_Q1.webm',
      },
      {
        name: 'Purge',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/UrgotW.png',
        description:
          'Urgot slows himself while he unloads his weapon on nearby enemies. Prioritizes enemy champions Urgot has recently struck with other abilities and triggers Echoing Flames.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0006/ability_0006_W1.webm',
      },
      {
        name: 'Disdain',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/UrgotE.png',
        description:
          'Urgot charges in a direction, shielding himself and trampling non-champion enemies. If he catches an enemy champion, he will stop and hurl them out of his way.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0006/ability_0006_E1.webm',
      },
      {
        name: 'Fear Beyond Death',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/UrgotR.png',
        description:
          'Urgot fires a chem-drill that impales the first enemy champion hit. If that champion falls below a health threshold, Urgot judges them weak and can execute them.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0006/ability_0006_R1.webm',
      },
    ],
    lanes: ['Top'],
    releaseDate: '2010-08-24',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V1.0.0.99',
    attackRange: 350,
    region: 'Zaun',
    species: 'Human',
    ratings: {
      damage: 2,
      toughness: 2,
      control: 2,
      mobility: 1,
      utility: 1,
      difficulty: 2,
      style: 55,
      damageBreakdown: {
        magic: 1,
        physical: 93.5,
        true_: 5.5,
      },
    },
    spotlightVideoID: 'AEd1aq77tBo',
    tagArrays: [
      [26, 2, 32, 67, 68],
      [],
      [103],
      [92, 99],
      [78, 80, 84, 82, 3, 101],
      [80, 29, 13, 89, 101],
    ],
    ids: {
      kebab: 'urgot',
      ddragon: 'Urgot',
      cdragon: 6,
      wiki: 'Urgot',
      universe: 'Urgot',
    },
  },
  {
    name: 'Varus',
    title: 'the Arrow of Retribution',
    roles: ['Mage', 'Marksman'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Varus.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Varus_0.jpg',
    abilities: [
      {
        name: 'Living Vengeance',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/VarusPassive.png',
        description:
          'On kill or assist, Varus temporarily gains Attack Speed. This bonus is larger if the enemy is a champion.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0110/ability_0110_P1.webm',
      },
      {
        name: 'Piercing Arrow',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/VarusQ.png',
        description:
          'Varus readies and then fires a powerful shot that gains extra range and damage the longer he spends preparing to fire.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0110/ability_0110_Q1.webm',
      },
      {
        name: 'Blighted Quiver',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/VarusW.png',
        description:
          "Passive: Varus' basic attacks deal bonus magic damage and apply Blight. Varus' other abilities detonate Blight, dealing magic damage based on the target's maximum Health. Active: Varus empowers his next Piercing Arrow.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0110/ability_0110_W1.webm',
      },
      {
        name: 'Hail of Arrows',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/VarusE.png',
        description:
          "Varus fires a hail of arrows that deal physical damage and desecrate the ground. Desecrated ground slows enemies' Movement Speed and reduces their self healing and regeneration.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0110/ability_0110_E1.webm',
      },
      {
        name: 'Chain of Corruption',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/VarusR.png',
        description:
          'Varus flings out a damaging tendril of corruption that immobilizes the first enemy champion hit and then spreads towards nearby uninfected champions, immobilizing them too on contact.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0110/ability_0110_R1.webm',
      },
    ],
    lanes: ['Middle', 'Bottom'],
    releaseDate: '2012-05-08',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V1.0.0.139',
    attackRange: 575,
    region: 'Ionia',
    species: 'Darkin',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 2,
      mobility: 1,
      utility: 1,
      difficulty: 2,
      style: 20,
      damageBreakdown: {
        magic: 14.8,
        physical: 84.2,
        true_: 1,
      },
    },
    spotlightVideoID: 'twiHstUjNkY',
    tagArrays: [
      [26, 67, 68],
      [88],
      [79, 90, 101],
      [53, 99],
      [103],
      [80, 27, 101],
    ],
    ids: {
      kebab: 'varus',
      ddragon: 'Varus',
      cdragon: 110,
      wiki: 'Varus',
      universe: 'Varus',
    },
  },
  {
    name: 'Vayne',
    title: 'the Night Hunter',
    roles: ['Assassin', 'Marksman'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Vayne.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vayne_0.jpg',
    abilities: [
      {
        name: 'Night Hunter',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Vayne_NightHunter.png',
        description:
          'Vayne ruthlessly hunts evil-doers, gaining <speed>30 Move Speed</speed> when moving toward nearby enemy champions.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0067/ability_0067_P1.webm',
      },
      {
        name: 'Tumble',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/VayneTumble.png',
        description:
          'Vayne tumbles, maneuvering to carefully place her next shot. Her next attack deals bonus damage.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0067/ability_0067_Q1.webm',
      },
      {
        name: 'Silver Bolts',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/VayneSilveredBolts.png',
        description:
          "Vayne tips her bolts with a rare metal, toxic to evil things. The third consecutive attack or ability against the same target deals a percentage of the target's max health as bonus true damage.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0067/ability_0067_W1.webm',
      },
      {
        name: 'Condemn',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/VayneCondemn.png',
        description:
          'Vayne draws a heavy crossbow from her back, and fires a huge bolt at her target, knocking them back and dealing damage. If they collide with terrain, they are impaled, dealing bonus damage and stunning them.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0067/ability_0067_E1.webm',
      },
      {
        name: 'Final Hour',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/VayneInquisition.png',
        description:
          'Readying herself for an epic confrontation, Vayne gains increased Attack Damage, Invisibility during Tumble, reduced Tumble cooldown, and more bonus Movement Speed from Night Hunter',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0067/ability_0067_R1.webm',
      },
    ],
    lanes: ['Bottom'],
    releaseDate: '2011-05-10',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V1.0.0.118',
    attackRange: 550,
    region: 'Demacia',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 2,
      mobility: 2,
      utility: 1,
      difficulty: 2,
      style: 0,
      damageBreakdown: {
        magic: 2.5,
        physical: 65.7,
        true_: 31.8,
      },
    },
    spotlightVideoID: 'gZDJqpFspmg',
    tagArrays: [
      [4, 2, 67, 68],
      [],
      [53, 78, 84, 82, 101],
      [53, 93, 98],
      [80, 102],
      [88, 99],
    ],
    ids: {
      kebab: 'vayne',
      ddragon: 'Vayne',
      cdragon: 67,
      wiki: 'Vayne',
      universe: 'Vayne',
    },
  },
  {
    name: 'Veigar',
    title: 'the Tiny Master of Evil',
    roles: ['Mage'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Veigar.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Veigar_0.jpg',
    abilities: [
      {
        name: 'Phenomenal Evil Power',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/VeigarEntropy.png',
        description:
          "Veigar is the greatest Evil to ever strike at the hearts of Runeterra - and he's only getting bigger! Striking an enemy Champion with a spell or scoring a takedown grants Veigar permanently increased Ability Power.",
        video: '',
      },
      {
        name: 'Baleful Strike',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/VeigarBalefulStrike.png',
        description:
          'Veigar unleashes a bolt of dark energy that deals magic damage to the first two enemies hit. Units killed by this bolt grant Veigar some ability power permanently.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0045/ability_0045_Q1.webm',
      },
      {
        name: 'Dark Matter',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/VeigarDarkMatter.png',
        description:
          "Veigar calls a great mass of dark matter to fall from the sky to the target location, dealing magic damage when it lands. Stacks of Phenomenal Evil reduce Dark Matter's cooldown.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0045/ability_0045_W1.webm',
      },
      {
        name: 'Event Horizon',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/VeigarEventHorizon.png',
        description:
          'Veigar twists the edges of space, creating a cage that Stuns enemies that pass through.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0045/ability_0045_E1.webm',
      },
      {
        name: 'Primordial Burst',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/VeigarR.png',
        description:
          "Blasts target enemy champion, dealing a large amount of magic damage, increasing based on the target's missing health.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0045/ability_0045_R1.webm',
      },
    ],
    lanes: ['Middle'],
    releaseDate: '2009-07-24',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V0.8.22.115',
    attackRange: 550,
    region: 'Bandle City',
    species: 'Yordle',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 3,
      mobility: 1,
      utility: 1,
      difficulty: 2,
      style: 100,
      damageBreakdown: {
        magic: 95.7,
        physical: 4,
        true_: 0.3,
      },
    },
    tagArrays: [[2, 67, 68], [73], [88, 101], [103], [80, 8, 103], [107, 102]],
    ids: {
      kebab: 'veigar',
      ddragon: 'Veigar',
      cdragon: 45,
      wiki: 'Veigar',
      universe: 'Veigar',
    },
    spotlightVideoID: 'cqp04g1GUDA',
  },
  {
    name: "Vel'Koz",
    title: 'the Eye of the Void',
    roles: ['Mage'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Velkoz.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Velkoz_0.jpg',
    abilities: [
      {
        name: 'Organic Deconstruction',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/VelKoz_Passive.png',
        description:
          "Vel'Koz's abilities apply <keywordName>Organic Deconstruction</keywordName> to enemies on hit. If 3 stacks are accumulated, the enemy will take a burst of true damage.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0161/ability_0161_P1.webm',
      },
      {
        name: 'Plasma Fission',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/VelkozQ.png',
        description:
          "Vel'Koz shoots a bolt of plasma that splits in two on reactivation or upon hitting an enemy. The bolt slows and damages on hit.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0161/ability_0161_Q1.webm',
      },
      {
        name: 'Void Rift',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/VelkozW.png',
        description:
          "Vel'Koz opens a rift to the void that deals an initial burst of damage, then explodes for a second burst of damage after a delay.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0161/ability_0161_W1.webm',
      },
      {
        name: 'Tectonic Disruption',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/VelkozE.png',
        description:
          "Vel'Koz causes an area to explode, knocking up enemies, and knocking close enemies slightly away.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0161/ability_0161_E1.webm',
      },
      {
        name: 'Life Form Disintegration Ray',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/VelkozR.png',
        description:
          "Vel'Koz unleashes a channelled beam that follows the cursor for 2.5 seconds that deals magic damage. Organic Deconstruction Researches enemy champions causing them to take true damage instead.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0161/ability_0161_R1.webm',
      },
    ],
    lanes: ['Support'],
    releaseDate: '2014-02-27',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V4.3',
    attackRange: 525,
    region: 'Void',
    species: 'Voidborn',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 2,
      mobility: 1,
      utility: 1,
      difficulty: 2,
      style: 100,
      damageBreakdown: {
        magic: 81.9,
        physical: 1.2,
        true_: 16.9,
      },
    },
    spotlightVideoID: 'IWA2C8tUG-g',
    tagArrays: [
      [4, 5, 26, 2, 67, 68],
      [],
      [95, 88, 101],
      [101],
      [80, 103],
      [79, 89, 101],
    ],
    ids: {
      kebab: 'vel-koz',
      ddragon: 'Velkoz',
      cdragon: 161,
      wiki: "Vel'Koz",
      universe: 'Velkoz',
    },
  },
  {
    name: 'Vex',
    title: 'the Gloomist',
    roles: ['Mage'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Vex.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vex_0.jpg',
    abilities: [
      {
        name: "Doom 'n Gloom",
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Icons_Vex_Passive.S_Yordle.png',
        description:
          'Vex periodically becomes empowered, causing her next basic Ability to fear enemies and interrupt dashes. Whenever a nearby enemy dashes, Vex applies a mark that can be consumed for bonus damage that also reduces the cooldown of her empowered state.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0711/ability_0711_P1.webm',
      },
      {
        name: 'Mistral Bolt',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/VexQ.png',
        description: 'Launch a damaging missile that accelerates mid-flight.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0711/ability_0711_Q1.webm',
      },
      {
        name: 'Personal Space',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/VexW.png',
        description: 'Gain a shield and damage nearby enemies.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0711/ability_0711_W1.webm',
      },
      {
        name: 'Looming Darkness',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/VexE.png',
        description:
          'Summon a damaging and slowing zone that applies Gloom to enemies.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0711/ability_0711_E1.webm',
      },
      {
        name: 'Shadow Surge',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/VexR.png',
        description:
          'Fire a missile that marks an enemy champion.  Recast to dash to them and deal damage.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0711/ability_0711_R1.webm',
      },
    ],
    lanes: ['Middle'],
    releaseDate: '2021-09-23',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V11.19',
    attackRange: 550,
    region: 'Shadow Isles',
    species: 'Yordle',
    ratings: {
      damage: 3,
      toughness: 2,
      control: 2,
      mobility: 2,
      utility: 1,
      difficulty: 2,
      style: 90,
      damageBreakdown: {
        magic: 91.5,
        physical: 7.2,
        true_: 1.3,
      },
    },
    spotlightVideoID: '-53Hat-vM-k',
    tagArrays: [
      [26, 34, 67, 68],
      [53, 8, 13],
      [101],
      [99],
      [103],
      [91, 94, 97, 101],
    ],
    ids: {
      kebab: 'vex',
      ddragon: 'Vex',
      cdragon: 711,
      wiki: 'Vex',
      universe: 'Vex',
    },
  },
  {
    name: 'Vi',
    title: 'the Piltover Enforcer',
    roles: ['Fighter', 'Assassin'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Vi.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vi_0.jpg',
    abilities: [
      {
        name: 'Blast Shield',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/ViPassive.png',
        description:
          'Vi charges a shield over time. The shield can be activated by hitting an enemy with an ability.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0254/ability_0254_P1.webm',
      },
      {
        name: 'Vault Breaker',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ViQ.png',
        description:
          'Vi charges her gauntlets and unleashes a vault shattering punch, carrying her forward. Enemies she hits are knocked back and receive a stack of Denting Blows.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0254/ability_0254_Q1.webm',
      },
      {
        name: 'Denting Blows',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ViW.png',
        description:
          "Vi's punches break her opponent's Armor, dealing bonus damage and granting her Attack Speed.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0254/ability_0254_W1.webm',
      },
      {
        name: 'Relentless Force',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ViE.png',
        description:
          "Vi's next attack blasts through her target, dealing damage to enemies behind it.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0254/ability_0254_E1.webm',
      },
      {
        name: 'Cease and Desist',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ViR.png',
        description:
          'Vi runs down an enemy, knocking aside anyone in the way. When she reaches her target she knocks it into the air, jumps after it, and slams it back into the ground.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0254/ability_0254_R1.webm',
      },
    ],
    lanes: ['Jungle'],
    releaseDate: '2012-12-19',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V1.0.0.153',
    attackRange: 125,
    region: 'Piltover',
    species: 'Human',
    ratings: {
      damage: 2,
      toughness: 2,
      control: 3,
      mobility: 2,
      utility: 1,
      difficulty: 1,
      style: 55,
      damageBreakdown: {
        magic: 0,
        physical: 93.2,
        true_: 6.8,
      },
    },
    spotlightVideoID: 'vp3ZrRJz-ZY',
    tagArrays: [
      [4, 5, 1, 34, 67, 69],
      [],
      [78, 79, 80, 83, 82, 90, 101],
      [53, 98],
      [53, 99],
      [79, 80, 78, 83, 82, 3, 101],
    ],
    ids: {
      kebab: 'vi',
      ddragon: 'Vi',
      cdragon: 254,
      wiki: 'Vi',
      universe: 'Vi',
    },
  },
  {
    name: 'Viego',
    title: 'The Ruined King',
    roles: ['Fighter', 'Assassin'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Viego.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Viego_0.jpg',
    abilities: [
      {
        name: "Sovereign's Domination",
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Viego_Passive.RuinedKing.png',
        description:
          "Enemies who fall before Viego become wraiths. By attacking a wraith, Viego temporarily seizes control of the dead enemy's body, healing for a percentage of his target's max health and gaining access to their basic abilities and items. He replaces their Ultimate with a free cast of his own.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0234/ability_0234_P1.webm',
      },
      {
        name: 'Blade of the Ruined King',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ViegoQ.png',
        description:
          "Viego's spectral blade passively deals bonus percent current Health damage <OnHit>On-Hit</OnHit> and strikes twice vs. enemies he recently hit with an Ability, stealing Health.<br><br>Viego can activate this Ability to thrust his zweihander forward, impaling enemies in front of him.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0234/ability_0234_Q1.webm',
      },
      {
        name: 'Spectral Maw',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ViegoW.png',
        description:
          'Viego charges up before dashing forward, releasing a ball of concentrated Black Mist that stuns the first enemy hit.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0234/ability_0234_W1.webm',
      },
      {
        name: 'Harrowed Path',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ViegoE.png',
        description:
          'Viego commands the Black Mist to haunt and surround a piece of terrain. Viego can hide in the Mist as a wraith, gaining camouflage, Move Speed, and Attack Speed.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0234/ability_0234_E1.webm',
      },
      {
        name: 'Heartbreaker',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ViegoR.png',
        description:
          'Viego teleports to a nearby location and executes an enemy champion on arrival, piercing their heart and causing a destructive shockwave around them that knocks away their allies.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0234/ability_0234_R1.webm',
      },
    ],
    lanes: ['Jungle'],
    releaseDate: '2021-01-22',
    resource: 'None',
    rangeType: 'Melee',
    releasePatch: 'V11.2',
    attackRange: 200,
    region: 'Shadow Isles',
    species: 'Wraith',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 2,
      mobility: 2,
      utility: 1,
      difficulty: 3,
      style: 20,
      damageBreakdown: {
        magic: 12.8,
        physical: 83,
        true_: 4.1,
      },
    },
    spotlightVideoID: '98CIAkqX6ZU',
    tagArrays: [
      [4, 26, 2, 32, 34, 62, 69],
      [72, 88],
      [52, 53, 101],
      [78, 80, 84, 82, 90, 101],
      [101],
      [83, 82, 94, 103],
    ],
    ids: {
      kebab: 'viego',
      ddragon: 'Viego',
      cdragon: 234,
      wiki: 'Viego',
      universe: 'Viego',
    },
  },
  {
    name: 'Viktor',
    title: 'the Machine Herald',
    roles: ['Mage'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Viktor.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Viktor_0.jpg',
    abilities: [
      {
        name: 'Glorious Evolution',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Viktor_Passive.png',
        description:
          'Viktor can augment his basic abilities when he gets kills on enemies.',
        video: '',
      },
      {
        name: 'Siphon Power',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ViktorPowerTransfer.png',
        description:
          "Viktor blasts an enemy unit dealing magic damage, gaining a shield and empowering his next basic attack.<br><br>Augment: Siphon Power's shield is increased by 60% and Viktor gains bonus Movement Speed after casting.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0112/ability_0112_Q1.webm',
      },
      {
        name: 'Gravity Field',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ViktorGravitonField.png',
        description:
          "Viktor conjures a heavy gravitational field that slows enemies in its radius. Enemies who stay within the device for too long are stunned.<br><br>Augment: Viktor's non-periodic spells apply a slow to enemies.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0112/ability_0112_W1.webm',
      },
      {
        name: 'Death Ray',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ViktorDeathRay.png',
        description:
          "Viktor uses his robotic arm to fire a chaos beam that cuts across the field in a line, dealing damage to all enemies in its path.<br><br>Augment: An explosion follows the Death Ray's wake, dealing magic damage.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0112/ability_0112_E1.webm',
      },
      {
        name: 'Chaos Storm',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ViktorChaosStorm.png',
        description:
          'Viktor conjures a singularity on the field which deals magic damage and interrupts enemy channels. The singularity then periodically does magic damage to all nearby enemies. Viktor can redirect the singularity.<br><br>Augment: The Chaos Storm moves 25% faster.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0112/ability_0112_R1.webm',
      },
    ],
    lanes: ['Middle'],
    releaseDate: '2011-12-29',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V1.0.0.131',
    attackRange: 525,
    region: 'Zaun',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 2,
      mobility: 1,
      utility: 1,
      difficulty: 3,
      style: 90,
      damageBreakdown: {
        magic: 97.5,
        physical: 1.8,
        true_: 0.7,
      },
    },
    spotlightVideoID: 'cHD781_Je7Q',
    tagArrays: [
      [26, 2, 67, 68],
      [88],
      [56, 102, 74],
      [8, 103, 74],
      [80, 74],
      [11, 103, 74],
    ],
    ids: {
      kebab: 'viktor',
      ddragon: 'Viktor',
      cdragon: 112,
      wiki: 'Viktor',
      universe: 'Viktor',
    },
  },
  {
    name: 'Vladimir',
    title: 'the Crimson Reaper',
    roles: ['Mage'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Vladimir.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vladimir_0.jpg',
    abilities: [
      {
        name: 'Crimson Pact',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/VladimirP.png',
        description:
          'Every 30 points of bonus Health gives Vladimir 1 Ability Power and every 1 point of Ability Power gives Vladimir 1.6 bonus Health (does not stack with itself).',
        video: '',
      },
      {
        name: 'Transfusion',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/VladimirQ.png',
        description:
          "Vladimir steals life from the target enemy. When Vladimir's resource is full, Transfusion will benefit from massively increased damage and healing for a brief time.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0008/ability_0008_Q1.webm',
      },
      {
        name: 'Sanguine Pool',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/VladimirSanguinePool.png',
        description:
          'Vladimir sinks into a pool of blood, becoming untargetable for 2 seconds. Additionally, enemies on the pool are slowed and Vladimir siphons life from them.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0008/ability_0008_W1.webm',
      },
      {
        name: 'Tides of Blood',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/VladimirE.png',
        description:
          'Vladimir pays his own health to charge up a reservoir of blood which, when released, deals damage in the area around him but can be blocked by enemy units.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0008/ability_0008_E1.webm',
      },
      {
        name: 'Hemoplague',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/VladimirHemoplague.png',
        description:
          'Vladimir infects an area with a virulent plague. Affected enemies take increased damage for the duration. After a few seconds, Hemoplague deals magic damage to infected enemies and heals Vladimir for each enemy Champion hit.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0008/ability_0008_R1.webm',
      },
    ],
    lanes: ['Middle'],
    releaseDate: '2010-07-27',
    resource: 'Crimson Rush',
    rangeType: 'Ranged',
    releasePatch: 'V1.0.0.97',
    attackRange: 450,
    region: 'Noxus',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 2,
      control: 1,
      mobility: 1,
      utility: 1,
      difficulty: 2,
      style: 100,
      damageBreakdown: {
        magic: 92.1,
        physical: 5.6,
        true_: 2.4,
      },
    },
    spotlightVideoID: 'eiUgrEWRx6M',
    tagArrays: [[26, 32, 64, 65, 68], [], [102], [99], [79, 90, 99], [103]],
    ids: {
      kebab: 'vladimir',
      ddragon: 'Vladimir',
      cdragon: 8,
      wiki: 'Vladimir',
      universe: 'Vladimir',
    },
  },
  {
    name: 'Volibear',
    title: 'the Relentless Storm',
    roles: ['Fighter', 'Tank'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Volibear.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Volibear_0.jpg',
    abilities: [
      {
        name: 'The Relentless Storm',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Volibear_Icon_P.png',
        description:
          "Volibear's Attacks and abilities grant Attack Speed, and eventually cause his Attacks to deal bonus magic damage to nearby enemies.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0106/ability_0106_P1.webm',
      },
      {
        name: 'Thundering Smash',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/VolibearQ.png',
        description:
          'Volibear gains speed towards enemies, <status>Stunning</status> and damaging the first one he Attacks.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0106/ability_0106_Q1.webm',
      },
      {
        name: 'Frenzied Maul',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/VolibearW.png',
        description:
          'Volibear damages an enemy, applying on-hit effects and marking them.  Casting this ability again on the same target deals bonus damage and Heals Volibear.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0106/ability_0106_W1.webm',
      },
      {
        name: 'Sky Splitter',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/VolibearE.png',
        description:
          "Volibear summons a lightning bolt at a location, dealing damage and Slowing enemies while granting Volibear a Shield if he's inside the blast radius.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0106/ability_0106_E1.webm',
      },
      {
        name: 'Stormbringer',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/VolibearR.png',
        description:
          'Volibear leaps to a target location, Slowing and damaging enemies beneath him while gaining bonus Health.  Enemy towers near his landing location become temporarily disabled.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0106/ability_0106_R1.webm',
      },
    ],
    lanes: ['Jungle', 'Top'],
    releaseDate: '2011-11-29',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V1.0.0.130',
    attackRange: 150,
    region: 'Freljord',
    species: 'Spirit God',
    ratings: {
      damage: 2,
      toughness: 3,
      control: 2,
      mobility: 2,
      utility: 1,
      difficulty: 1,
      style: 30,
      damageBreakdown: {
        magic: 34.6,
        physical: 60.5,
        true_: 4.9,
      },
    },
    spotlightVideoID: 'pVrWNNnhSww',
    tagArrays: [
      [26, 2, 33, 67, 69],
      [53, 55],
      [53, 80, 99],
      [102],
      [103],
      [103],
    ],
    ids: {
      kebab: 'volibear',
      ddragon: 'Volibear',
      cdragon: 106,
      wiki: 'Volibear',
      universe: 'Volibear',
    },
  },
  {
    name: 'Warwick',
    title: 'the Uncaged Wrath of Zaun',
    roles: ['Fighter', 'Tank'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Warwick.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Warwick_0.jpg',
    abilities: [
      {
        name: 'Eternal Hunger',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/WarwickP.png',
        description:
          "Warwick's basic attacks deal bonus magic damage. If Warwick is below 50% health, he heals the same amount. If Warwick is below 25% health, this healing triples.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0019/ability_0019_P1.webm',
      },
      {
        name: 'Jaws of the Beast',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/WarwickQ.png',
        description:
          'Warwick lunges forward and bites his target, dealing damage based on their maximum health and healing for damage dealt.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0019/ability_0019_Q1.webm',
      },
      {
        name: 'Blood Hunt',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/WarwickW.png',
        description:
          'Warwick senses enemies below 50% health, gaining movement speed toward and attack speed against them. When they fall below 20% health, he frenzies and these bonuses triple.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0019/ability_0019_W1.webm',
      },
      {
        name: 'Primal Howl',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/WarwickE.png',
        description:
          'Warwick gains damage reduction for 2.5 seconds. At the end, or if re-activated, he howls, causing nearby enemies to flee for 1 second.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0019/ability_0019_E1.webm',
      },
      {
        name: 'Infinite Duress',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/WarwickR.png',
        description:
          'Warwick leaps in a direction (scaling with his bonus Move Speed), suppressing the first champion he collides with for 1.5 seconds.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0019/ability_0019_R1.webm',
      },
    ],
    lanes: ['Jungle'],
    releaseDate: '2009-02-21',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V0.1.0.2',
    attackRange: 125,
    region: 'Zaun',
    species: 'Human',
    ratings: {
      damage: 2,
      toughness: 2,
      control: 2,
      mobility: 1,
      utility: 1,
      difficulty: 1,
      style: 30,
      damageBreakdown: {
        magic: 46.5,
        physical: 48.7,
        true_: 4.8,
      },
    },
    spotlightVideoID: 'Rro20bR4jnQ',
    tagArrays: [
      [26, 33, 34, 67, 69],
      [53, 55, 79],
      [79, 81, 85, 89, 90, 102],
      [99],
      [80, 13, 99],
      [78, 80, 83, 82, 8, 29, 101],
    ],
    ids: {
      kebab: 'warwick',
      ddragon: 'Warwick',
      cdragon: 19,
      wiki: 'Warwick',
      universe: 'Warwick',
    },
  },
  {
    name: 'Wukong',
    title: 'the Monkey King',
    roles: ['Fighter', 'Tank'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/MonkeyKing.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MonkeyKing_0.jpg',
    abilities: [
      {
        name: 'Stone Skin',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/MonkeyKingStoneSkin.png',
        description:
          'Wukong gains stacking armor and max health regeneration while fighting champions and monsters.',
        video: '',
      },
      {
        name: 'Crushing Blow',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/MonkeyKingDoubleAttack.png',
        description:
          "Wukong's next attack gains attack range, deals bonus damage, and reduces the target's armor for a few seconds.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0062/ability_0062_Q1.webm',
      },
      {
        name: 'Warrior Trickster',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/MonkeyKingDecoy.png',
        description:
          "Wukong becomes <font color='#91d7ee'>Invisible</font> and dashes in a direction, leaving behind a clone that will attack nearby enemies.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0062/ability_0062_W1.webm',
      },
      {
        name: 'Nimbus Strike',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/MonkeyKingNimbus.png',
        description:
          'Wukong dashes to a targeted enemy and sends out images to attack enemies near his target, dealing damage to each enemy struck.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0062/ability_0062_E1.webm',
      },
      {
        name: 'Cyclone',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/MonkeyKingSpinToWin.png',
        description:
          "Wukong's extends his staff and spins it around repeatedly, gaining Movement Speed.<br><br>Enemies struck take damage and are knocked up.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0062/ability_0062_R1.webm',
      },
    ],
    lanes: ['Jungle'],
    releaseDate: '2011-07-26',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V1.0.0.122',
    attackRange: 175,
    region: 'Ionia',
    species: 'Vastayan',
    ratings: {
      damage: 2,
      toughness: 2,
      control: 2,
      mobility: 2,
      utility: 1,
      difficulty: 1,
      style: 55,
      damageBreakdown: {
        magic: 17.7,
        physical: 81.4,
        true_: 0.9,
      },
    },
    spotlightVideoID: 'k1zAhC5aeQs',
    tagArrays: [
      [5, 67, 69],
      [],
      [53, 99],
      [78, 84, 82, 103],
      [78, 83, 82, 102],
      [80, 91, 99],
    ],
    ids: {
      kebab: 'wukong',
      ddragon: 'MonkeyKing',
      cdragon: 62,
      wiki: 'Wukong',
      universe: 'MonkeyKing',
    },
  },
  {
    name: 'Xayah',
    title: 'the Rebel',
    roles: ['Marksman'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Xayah.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Xayah_0.jpg',
    abilities: [
      {
        name: 'Clean Cuts',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/XayahPassive.png',
        description:
          "After using an ability, Xayah's next basic attacks will hit all targets along their path and leave a <font color='#C200E1'>Feather</font>.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0498/ability_0498_P1.webm',
      },
      {
        name: 'Double Daggers',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/XayahQ.png',
        description:
          'Xayah throws two damaging daggers that also drop Feathers she can recall.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0498/ability_0498_Q1.webm',
      },
      {
        name: 'Deadly Plumage',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/XayahW.png',
        description:
          'Xayah creates a storm of blades that increase her Attack Speed and damage while also granting her Move Speed if she attacks a champion.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0498/ability_0498_W1.webm',
      },
      {
        name: 'Bladecaller',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/XayahE.png',
        description:
          'Xayah calls back all her dropped Feathers dealing damage and rooting enemies.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0498/ability_0498_E1.webm',
      },
      {
        name: 'Featherstorm',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/XayahR.png',
        description:
          'Xayah leaps into the air becoming untargetable and throwing out a fan of daggers, dropping Feathers she can recall.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0498/ability_0498_R1.webm',
      },
    ],
    lanes: ['Bottom'],
    releaseDate: '2017-04-19',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V7.8',
    attackRange: 525,
    region: 'Ionia',
    species: 'Vastayan',
    ratings: {
      damage: 3,
      toughness: 2,
      control: 3,
      mobility: 1,
      utility: 1,
      difficulty: 2,
      style: 30,
      damageBreakdown: {
        magic: 3.8,
        physical: 92.6,
        true_: 3.6,
      },
    },
    spotlightVideoID: 'CgQfr8bMNN8',
    tagArrays: [
      [32, 67, 68],
      [55, 75, 104],
      [101],
      [55, 75, 99],
      [80, 27, 100],
      [101],
    ],
    ids: {
      kebab: 'xayah',
      ddragon: 'Xayah',
      cdragon: 498,
      wiki: 'Xayah',
      universe: 'Xayah',
    },
  },
  {
    name: 'Xerath',
    title: 'the Magus Ascendant',
    roles: ['Mage'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Xerath.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Xerath_0.jpg',
    abilities: [
      {
        name: 'Mana Surge',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Xerath_Passive1.png',
        description: "Xerath's basic attacks periodically restore Mana.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0101/ability_0101_P1.webm',
      },
      {
        name: 'Arcanopulse',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/XerathArcanopulseChargeUp.png',
        description:
          'Fires a long-range beam of energy, dealing magic damage to all targets hit.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0101/ability_0101_Q1.webm',
      },
      {
        name: 'Eye of Destruction',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/XerathArcaneBarrage2.png',
        description:
          'Calls down a barrage of arcane energy, slowing and dealing magic damage to all enemies in an area. Targets in the middle receive additional damage and a stronger slow.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0101/ability_0101_W1.webm',
      },
      {
        name: 'Shocking Orb',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/XerathMageSpear.png',
        description: 'Deals magic damage to an enemy and stuns them.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0101/ability_0101_E1.webm',
      },
      {
        name: 'Rite of the Arcane',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/XerathLocusOfPower2.png',
        description:
          'Xerath immobilizes himself and gains numerous long-range barrages.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0101/ability_0101_R1.webm',
      },
    ],
    lanes: ['Support'],
    releaseDate: '2011-10-05',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V1.0.0.126',
    attackRange: 525,
    region: 'Shurima',
    species: 'Baccai',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 2,
      mobility: 1,
      utility: 1,
      difficulty: 2,
      style: 90,
      damageBreakdown: {
        magic: 98.4,
        physical: 0.9,
        true_: 0.7,
      },
    },
    spotlightVideoID: '2v5MmuMJ2qU',
    tagArrays: [
      [26, 2, 67, 68],
      [55, 95],
      [79, 90, 101],
      [103],
      [80, 101],
      [79, 89, 103],
    ],
    ids: {
      kebab: 'xerath',
      ddragon: 'Xerath',
      cdragon: 101,
      wiki: 'Xerath',
      universe: 'Xerath',
    },
  },
  {
    name: 'Xin Zhao',
    title: 'the Seneschal of Demacia',
    roles: ['Fighter', 'Assassin'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/XinZhao.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/XinZhao_0.jpg',
    abilities: [
      {
        name: 'Determination',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/XinZhaoP.png',
        description:
          'Every third attack deals bonus damage and heals Xin Zhao.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0005/ability_0005_P1.webm',
      },
      {
        name: 'Three Talon Strike',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/XinZhaoQ.png',
        description:
          "Xin Zhao's next 3 standard attacks deal increased damage with the third attack knocking an opponent into the air.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0005/ability_0005_Q1.webm',
      },
      {
        name: 'Wind Becomes Lightning',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/XinZhaoW.png',
        description:
          'Xin Zhao slashes in front of himself with his spear, then thrusts it forward, slowing affected enemies and marking them as Challenged.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0005/ability_0005_W1.webm',
      },
      {
        name: 'Audacious Charge',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/XinZhaoE.png',
        description:
          'Xin Zhao charges to an enemy, gaining increased Attack Speed and dealing damage to all enemies in the area, slowing them briefly. Audacious Charge gains increased range against Challenged targets.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0005/ability_0005_E1.webm',
      },
      {
        name: 'Crescent Guard',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/XinZhaoR.png',
        description:
          'Xin Zhao challenges an enemy he damaged recently. Xin Zhao deals damage to nearby enemies based on their current Health and knocks non-challenged targets back, becoming impervious to damage dealt by champions outside of the circle created.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0005/ability_0005_R1.webm',
      },
    ],
    lanes: ['Jungle'],
    releaseDate: '2010-07-13',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V1.0.0.96',
    attackRange: 175,
    region: 'Demacia',
    species: 'Human',
    ratings: {
      damage: 2,
      toughness: 2,
      control: 2,
      mobility: 2,
      utility: 1,
      difficulty: 1,
      style: 35,
      damageBreakdown: {
        magic: 8.5,
        physical: 86.5,
        true_: 5,
      },
    },
    spotlightVideoID: '9l1lj_9Xg-E',
    tagArrays: [
      [4, 5, 26, 2, 31, 67, 69],
      [53, 55],
      [53, 80, 99],
      [101],
      [78, 83, 82, 102],
      [80, 99],
    ],
    ids: {
      kebab: 'xin-zhao',
      ddragon: 'XinZhao',
      cdragon: 5,
      wiki: 'Xin_Zhao',
      universe: 'XinZhao',
    },
  },
  {
    name: 'Yasuo',
    title: 'the Unforgiven',
    roles: ['Fighter', 'Assassin'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Yasuo.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg',
    abilities: [
      {
        name: 'Way of the Wanderer',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Yasuo_Passive.png',
        description:
          "Yasuo's Critical Strike Chance is increased. Additionally, Yasuo builds toward a shield whenever he is moving. The shield triggers when he takes damage from a champion or monster.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0157/ability_0157_P1.webm',
      },
      {
        name: 'Steel Tempest',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/YasuoQ1Wrapper.png',
        description:
          "Thrusts forward, damaging all enemies in a line.<br><br>On hit, grants a stack of Gathering Storm for a few seconds. At 2 stacks, Steel Tempest fires a whirlwind that knocks <font color='#6655CC'>Airborne</font>.<br><br>Steel Tempest is treated as a basic attack and scales with all the same things.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0157/ability_0157_Q1.webm',
      },
      {
        name: 'Wind Wall',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/YasuoW.png',
        description:
          'Creates a moving wall that blocks all enemy projectiles for 4 seconds.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0157/ability_0157_W1.webm',
      },
      {
        name: 'Sweeping Blade',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/YasuoE.png',
        description:
          "Dashes through target enemy, dealing magic damage. Each cast increases your next dash's base Damage, up to a max amount.<br><br>Cannot be re-cast on the same enemy for a few seconds.<br><br><font color='#99FF99'>If Steel Tempest is cast while dashing, it will strike as a circle.</font>",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0157/ability_0157_E1.webm',
      },
      {
        name: 'Last Breath',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/YasuoR.png',
        description:
          "Blinks to an <factionIonia1>Airborne</factionIonia1> enemy champion, dealing physical damage and holding all <factionIonia1>Airborne</factionIonia1> enemies in the area in the air. Grants maximum Flow but resets all stacks of Gathering Storm.<br><br>For a moderate time afterwards, Yasuo's critical strikes gain significant Bonus Armor Penetration.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0157/ability_0157_R1.webm',
      },
    ],
    lanes: ['Middle', 'Top'],
    releaseDate: '2013-12-13',
    resource: 'Flow',
    rangeType: 'Melee',
    releasePatch: 'V3.15',
    attackRange: 175,
    region: 'Ionia',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 2,
      mobility: 3,
      utility: 2,
      difficulty: 3,
      style: 20,
      damageBreakdown: {
        magic: 7.9,
        physical: 89.6,
        true_: 2.5,
      },
    },
    spotlightVideoID: 'fkM20LgOdKQ',
    tagArrays: [
      [5, 66, 69],
      [],
      [80, 91, 101],
      [101],
      [78, 83, 82, 102],
      [78, 80, 81, 102],
    ],
    ids: {
      kebab: 'yasuo',
      ddragon: 'Yasuo',
      cdragon: 157,
      wiki: 'Yasuo',
      universe: 'Yasuo',
    },
  },
  {
    name: 'Yone',
    title: 'the Unforgotten',
    roles: ['Fighter', 'Assassin'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Yone.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yone_0.jpg',
    abilities: [
      {
        name: 'Way of the Hunter',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/YonePassive.Yone.png',
        description:
          'Yone deals magic damage with every second Attack. In addition, his critical strike chance is increased.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0777/ability_0777_P1.webm',
      },
      {
        name: 'Mortal Steel',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/YoneQ.png',
        description:
          'Thrusts forward, damaging all enemies in a line.<br><br>On hit, grants a stack of Gathering Storm for a few seconds. At 2 stacks, Mortal Steel dashes Yone forward with a gust of wind knocking enemies <status>Airborne</status>.<br><br>Mortal Steel is treated as a basic attack and scales with all the same things.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0777/ability_0777_Q1.webm',
      },
      {
        name: 'Spirit Cleave',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/YoneW.png',
        description:
          "Cleaves forward, damaging all enemies in a cone. Grants a shield to Yone, the value is increased by the number of champions hit by the swipe.<br><br>Spirit Cleave's cooldown and cast time scale with attack speed.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0777/ability_0777_W1.webm',
      },
      {
        name: 'Soul Unbound',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/YoneE.png',
        description:
          "Yone's spirit leaves his body behind, gaining movement speed. When this skill ends, Yone's spirit is forced back to his body and he repeats a portion of the damage he dealt as a spirit.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0777/ability_0777_E1.webm',
      },
      {
        name: 'Fate Sealed',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/YoneR.png',
        description:
          'Yone blinks behind the last champion in a line with a slash so powerful it pulls all enemies hit towards him.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0777/ability_0777_R1.webm',
      },
    ],
    lanes: ['Middle', 'Top'],
    releaseDate: '2020-08-06',
    resource: 'Flow',
    rangeType: 'Melee',
    releasePatch: 'V10.16',
    attackRange: 175,
    region: 'Ionia',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 2,
      mobility: 3,
      utility: 1,
      difficulty: 3,
      style: 45,
      damageBreakdown: {
        magic: 22.2,
        physical: 63.2,
        true_: 14.5,
      },
    },
    spotlightVideoID: 'd15O3zSLA_Q',
    tagArrays: [
      [5, 1, 2, 34, 39, 66, 69],
      [52],
      [78, 80, 91, 101],
      [101],
      [83, 82, 91, 101],
      [78, 80, 81, 8, 101],
    ],
    ids: {
      kebab: 'yone',
      ddragon: 'Yone',
      cdragon: 777,
      wiki: 'Yone',
      universe: 'Yone',
    },
  },
  {
    name: 'Yorick',
    title: 'Shepherd of Souls',
    roles: ['Fighter', 'Tank'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Yorick.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yorick_0.jpg',
    abilities: [
      {
        name: 'Shepherd of Souls',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Yorick_P.png',
        description:
          "<font color='#FF9900'>The Cursed Horde:</font> Yorick can summon Mist Walkers to swarm and attack nearby enemies.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0083/ability_0083_P1.webm',
      },
      {
        name: 'Last Rites',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/YorickQ.png',
        description:
          'Yorick deals bonus damage on his next attack and heals himself. If the target dies a grave will be dug.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0083/ability_0083_Q1.webm',
      },
      {
        name: 'Dark Procession',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/YorickW.png',
        description:
          'Yorick summons a destructible wall at target location that will block enemy movement.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0083/ability_0083_W1.webm',
      },
      {
        name: 'Mourning Mist',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/YorickE.png',
        description:
          'Yorick throws a globule of Black Mist that damages, slows and marks enemies.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0083/ability_0083_E1.webm',
      },
      {
        name: 'Eulogy of the Isles',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/YorickR.png',
        description:
          "Yorick summons the Maiden of the Mist that causes Yorick's attacks against the Maiden's target to deal bonus damage. The Maiden will also automatically raise Walkers from dead enemies.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0083/ability_0083_R1.webm',
      },
    ],
    lanes: ['Top'],
    releaseDate: '2011-06-22',
    resource: 'Mana',
    rangeType: 'Melee',
    releasePatch: 'V1.0.0.120',
    attackRange: 175,
    region: 'Shadow Isles',
    species: 'Human',
    ratings: {
      damage: 2,
      toughness: 2,
      control: 2,
      mobility: 1,
      utility: 2,
      difficulty: 2,
      style: 55,
      damageBreakdown: {
        magic: 34.9,
        physical: 64.9,
        true_: 0.2,
      },
    },
    spotlightVideoID: 'RUVveKdiU_U',
    tagArrays: [[4, 26, 67, 69], [], [53, 88, 99], [103], [103], [103]],
    ids: {
      kebab: 'yorick',
      ddragon: 'Yorick',
      cdragon: 83,
      wiki: 'Yorick',
      universe: 'Yorick',
    },
  },
  {
    name: 'Yuumi',
    title: 'the Magical Cat',
    roles: ['Mage', 'Support'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Yuumi.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yuumi_0.jpg',
    abilities: [
      {
        name: "Bop 'n' Block",
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/YuumiP.png',
        description:
          "Periodically, when Yuumi attacks a champion, she restores mana and gains a shield that follows her, protecting her and the ally she's attached to.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0350/ability_0350_P1.webm',
      },
      {
        name: 'Prowling Projectile',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/YuumiQ.png',
        description:
          'Yuumi fires a missile, dealing damage to the first target hit. It deals bonus damage and slows if it takes at least 1 second to get to its target.<br><br>While Attached, the missile can be controlled with your cursor.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0350/ability_0350_Q1.webm',
      },
      {
        name: 'You and Me!',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/YuumiW.png',
        description:
          "Passively, Yuumi increases her ally's Adaptive Force and her own. Actively, Yuumi dashes to a target ally, becoming untargetable from everything except turrets.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0350/ability_0350_W1.webm',
      },
      {
        name: 'Zoomies',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/YuumiE.png',
        description:
          "Heals Yuumi and boosts Movement Speed and Attack Speed. If she's attached, she passes it to her ally instead.<br>",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0350/ability_0350_E1.webm',
      },
      {
        name: 'Final Chapter',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/YuumiR.png',
        description:
          'Yuumi channels seven waves of damage, rooting anyone hit by three or more. Yuumi can move, attach, and cast Zoomies! while channeling.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0350/ability_0350_R1.webm',
      },
    ],
    lanes: ['Support'],
    releaseDate: '2019-05-14',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V9.10',
    attackRange: 500,
    region: 'Bandle City',
    species: 'Cat',
    ratings: {
      damage: 1,
      toughness: 1,
      control: 1,
      mobility: 3,
      utility: 3,
      difficulty: 1,
      style: 100,
      damageBreakdown: {
        magic: 90.5,
        physical: 6.1,
        true_: 3.4,
      },
    },
    spotlightVideoID: 'TYkvBijQccA',
    tagArrays: [
      [26, 32, 67, 68],
      [55],
      [101],
      [78, 79, 83, 82, 86, 102],
      [99],
      [79, 80, 27, 89, 101],
    ],
    ids: {
      kebab: 'yuumi',
      ddragon: 'Yuumi',
      cdragon: 350,
      wiki: 'Yuumi',
      universe: 'Yuumi',
    },
  },
  {
    name: 'Zac',
    title: 'the Secret Weapon',
    roles: ['Fighter', 'Tank'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Zac.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zac_0.jpg',
    abilities: [
      {
        name: 'Cell Division',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/ZacPassive.png',
        description:
          "Each time Zac hits an enemy with an ability, he sheds a chunk of himself that can be reabsorbed to restore Health. Upon taking fatal damage, Zac splits into 4 bloblets that attempt to recombine. If any bloblets remain, he will revive with an amount of Health depending on the Health of the surviving bloblets. Each bloblet has a percentage of Zac's maximum Health, Armor and Magic Resistance. This ability has a 5 minute cooldown.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0154/ability_0154_P1.webm',
      },
      {
        name: 'Stretching Strikes',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ZacQ.png',
        description:
          'Zac stretches an arm, grabbing an enemy. Attacking a different enemy will cause him to throw both targets towards each other.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0154/ability_0154_Q1.webm',
      },
      {
        name: 'Unstable Matter',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ZacW.png',
        description:
          'Zac explodes outward towards nearby enemies, dealing a percentage of their maximum health as magic damage.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0154/ability_0154_W1.webm',
      },
      {
        name: 'Elastic Slingshot',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ZacE.png',
        description:
          'Zac attaches his arms to the ground and stretches back, launching himself forward.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0154/ability_0154_E1.webm',
      },
      {
        name: "Let's Bounce!",
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ZacR.png',
        description:
          'Zac bounces four times, knocking up enemies hit and slowing them.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0154/ability_0154_R1.webm',
      },
    ],
    lanes: ['Jungle'],
    releaseDate: '2013-03-29',
    resource: 'Health',
    rangeType: 'Melee',
    releasePatch: 'V3.5',
    attackRange: 175,
    region: 'Zaun',
    species: 'Golem',
    ratings: {
      damage: 2,
      toughness: 3,
      control: 3,
      mobility: 2,
      utility: 1,
      difficulty: 1,
      style: 100,
      damageBreakdown: {
        magic: 84.2,
        physical: 5.1,
        true_: 10.8,
      },
    },
    spotlightVideoID: 'lr8kHe4vqZQ',
    tagArrays: [
      [4, 5, 1, 26, 2, 32, 47, 65, 69],
      [70],
      [56, 27, 101],
      [99],
      [78, 80, 83, 82, 90, 103],
      [79, 80, 99],
    ],
    ids: {
      kebab: 'zac',
      ddragon: 'Zac',
      cdragon: 154,
      wiki: 'Zac',
      universe: 'Zac',
    },
  },
  {
    name: 'Zed',
    title: 'the Master of Shadows',
    roles: ['Assassin'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Zed.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg',
    abilities: [
      {
        name: 'Contempt for the Weak',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/shadowninja_P.png',
        description:
          "Zed's basic attacks against low health targets deals bonus Magic Damage. This effect can only occur once every few seconds against the same enemy champion.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0238/ability_0238_P1.webm',
      },
      {
        name: 'Razor Shuriken',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ZedQ.png',
        description:
          'Zed and his shadows throw their shurikens.<br><br>Each shuriken deals damage to every enemy hit.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0238/ability_0238_Q1.webm',
      },
      {
        name: 'Living Shadow',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ZedW.png',
        description:
          "<font color='#FF9900'>Passive:</font> Zed gains energy whenever he and his shadows strike an enemy with the same ability. Energy can only be gained once per cast ability.<br><br><font color='#FF9900'>Active:</font> Zed's shadow dashes forward, remaining in place for a few seconds. Reactivating Living Shadow will cause Zed to switch positions with this shadow.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0238/ability_0238_W1.webm',
      },
      {
        name: 'Shadow Slash',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ZedE.png',
        description:
          'Zed and his shadows slash, dealing damage to nearby enemies.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0238/ability_0238_E1.webm',
      },
      {
        name: 'Death Mark',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ZedR.png',
        description:
          'Zed becomes untargetable and dashes to an enemy champion, marking them. After 3 seconds the mark triggers, repeating a portion of all the damage Zed dealt to the target while they were marked.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0238/ability_0238_R1.webm',
      },
    ],
    lanes: ['Jungle', 'Middle'],
    releaseDate: '2012-11-13',
    resource: 'Energy',
    rangeType: 'Melee',
    releasePatch: 'V1.0.0.151',
    attackRange: 125,
    region: 'Ionia',
    species: 'Human',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 1,
      mobility: 3,
      utility: 1,
      difficulty: 3,
      style: 55,
      damageBreakdown: {
        magic: 4.3,
        physical: 90.4,
        true_: 5.3,
      },
    },
    spotlightVideoID: '2DFtlNGzMIA',
    tagArrays: [
      [26, 32, 63, 69],
      [53],
      [101],
      [78, 81, 91, 103],
      [99],
      [78, 81, 102],
    ],
    ids: {
      kebab: 'zed',
      ddragon: 'Zed',
      cdragon: 238,
      wiki: 'Zed',
      universe: 'Zed',
    },
  },
  {
    ids: {
      cdragon: 221,
      ddragon: 'Zeri',
      kebab: 'zeri',
      universe: 'Zeri',
      wiki: 'Zeri',
    },
    name: 'Zeri',
    title: 'The Spark of Zaun',
    roles: ['Marksman'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/12.7.1/img/champion/Zeri.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zeri_0.jpg',
    resource: 'Mana',
    attackRange: 500,
    abilities: [
      {
        name: 'Living Battery',
        img: 'https://ddragon.leagueoflegends.com/cdn/12.7.1/img/passive/ZeriP.Zeri.png',
        description:
          'Zeri gains Move Speed whenever she receives a shield. When she damages an enemy shield she absorbs its energy, shielding herself.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0221/ability_0221_P1.webm',
      },
      {
        name: 'Burst Fire',
        img: 'https://ddragon.leagueoflegends.com/cdn/12.7.1/img/spell/ZeriQ.png',
        description:
          "Zeri's Attacks are treated as Abilities and Burst Fire is treated as an Attack. Moving and casting Burst Fire stores up energy in Zeri's Sparkpack. When fully charged her next Attack will slow and deal bonus damage. Burst Fire shoots a burst of 7 rounds that deal attack damage to the first enemy hit.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0221/ability_0221_Q1.webm',
      },
      {
        name: 'Ultrashock Laser',
        img: 'https://ddragon.leagueoflegends.com/cdn/12.7.1/img/spell/ZeriW.png',
        description:
          'Zeri fires an electric pulse that slows and damages the first enemy hit. If the pulse hits a wall it expands into a long range laser.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0221/ability_0221_W1.webm',
      },
      {
        name: 'Spark Surge',
        img: 'https://ddragon.leagueoflegends.com/cdn/12.7.1/img/spell/ZeriE.png',
        description:
          'Zeri dashes a short distance and energizes her next 3 shots of Burst Fire, causing them to pierce through enemies. She will vault and grind over any terrain she touches.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0221/ability_0221_E1.webm',
      },
      {
        name: 'Lightning Crash',
        img: 'https://ddragon.leagueoflegends.com/cdn/12.7.1/img/spell/ZeriR.png',
        description:
          'Zeri discharges a nova of electricity and overcharges herself, gaining increased damage and stacking Move Speed that refreshes and gets stronger every time she hits an enemy champion. While overcharged, Burst fire becomes a faster triple shot that chains lightning between enemies.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0221/ability_0221_R1.webm',
      },
    ],
    ratings: {
      difficulty: 2,
      style: 40,
      damage: 2,
      toughness: 1,
      control: 2,
      mobility: 3,
      utility: 1,
      damageBreakdown: {
        physical: 62.3,
        magic: 33.4,
        true_: 4.3,
      },
    },
    lanes: ['Bottom'],
    rangeType: 'Ranged',
    region: 'Zaun',
    species: 'Human',
    releaseDate: '2022-01-20',
    releasePatch: 'V12.2',
    spotlightVideoID: 'VcaUG8hV9SU',
    tagArrays: [[68, 67], [], [101], [101], [101], [99]],
  },
  {
    name: 'Ziggs',
    title: 'the Hexplosives Expert',
    roles: ['Mage'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Ziggs.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ziggs_0.jpg',
    abilities: [
      {
        name: 'Short Fuse',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/ZiggsPassiveReady.png',
        description:
          "Periodically, Ziggs' next basic attack deals bonus magic damage. This cooldown is reduced whenever Ziggs uses an ability.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0115/ability_0115_P1.webm',
      },
      {
        name: 'Bouncing Bomb',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ZiggsQ.png',
        description: 'Ziggs throws a bouncing bomb that deals magic damage.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0115/ability_0115_Q1.webm',
      },
      {
        name: 'Satchel Charge',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ZiggsW.png',
        description:
          'Ziggs flings an explosive charge that detonates after 4 seconds, or when this ability is activated again. The explosion deals magic damage to enemies, knocking them away. Ziggs is also knocked away, but takes no damage. Ziggs can use the Satchel to hexplode vulnerable enemy turrets.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0115/ability_0115_W1.webm',
      },
      {
        name: 'Hexplosive Minefield',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ZiggsE.png',
        description:
          'Ziggs scatters proximity mines that detonate on enemy contact, dealing magic damage and slowing. Successive mine detonations on the same target deal reduced damage.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0115/ability_0115_E1.webm',
      },
      {
        name: 'Mega Inferno Bomb',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ZiggsR.png',
        description:
          'Ziggs deploys his ultimate creation, the Mega Inferno Bomb, hurling it an enormous distance. Enemies in the primary blast zone take more damage than those farther away.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0115/ability_0115_R1.webm',
      },
    ],
    lanes: ['Middle'],
    releaseDate: '2012-02-01',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V1.0.0.133',
    attackRange: 550,
    region: 'Zaun',
    species: 'Yordle',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 2,
      mobility: 2,
      utility: 1,
      difficulty: 2,
      style: 90,
      damageBreakdown: {
        magic: 97.1,
        physical: 2.3,
        true_: 0.6,
      },
    },
    spotlightVideoID: 'kNabvLyUXzI',
    tagArrays: [[4, 26, 67, 68], [53], [103], [80, 91, 103], [103], [97, 103]],
    ids: {
      kebab: 'ziggs',
      ddragon: 'Ziggs',
      cdragon: 115,
      wiki: 'Ziggs',
      universe: 'Ziggs',
    },
  },
  {
    name: 'Zilean',
    title: 'the Chronokeeper',
    roles: ['Mage', 'Support'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Zilean.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zilean_0.jpg',
    abilities: [
      {
        name: 'Time In A Bottle',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Zilean_Passive.png',
        description:
          "Zilean stores time as Experience and can grant it to his allies. When he has enough Experience to finish an ally's level up, he can right-click them to impart it. Zilean receives as much Experience as he gives.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0026/ability_0026_P1.webm',
      },
      {
        name: 'Time Bomb',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ZileanQ.png',
        description:
          'Tosses a bomb to target area that sticks to units that come near it (prioritizes Champions). It detonates after 3 seconds, dealing area of effect damage. If a Time Bomb is detonated early by another Time Bomb, it also stuns enemies.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0026/ability_0026_Q1.webm',
      },
      {
        name: 'Rewind',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ZileanW.png',
        description:
          'Zilean can prepare himself for future confrontations, reducing the cooldowns of his other basic abilities.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0026/ability_0026_W1.webm',
      },
      {
        name: 'Time Warp',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/TimeWarp.png',
        description:
          "Zilean bends time around any unit, decreasing an enemy's Move Speed or increasing an ally's Move Speed for a short time.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0026/ability_0026_E1.webm',
      },
      {
        name: 'Chronoshift',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ChronoShift.png',
        description:
          'Zilean places a protective time rune on an allied champion, teleporting the champion back in time if they take lethal damage.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0026/ability_0026_R1.webm',
      },
    ],
    lanes: ['Support'],
    releaseDate: '2009-04-18',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V0.7.20.102',
    attackRange: 550,
    region: 'Runeterra',
    species: 'Human',
    ratings: {
      damage: 2,
      toughness: 1,
      control: 2,
      mobility: 2,
      utility: 3,
      difficulty: 2,
      style: 100,
      damageBreakdown: {
        magic: 89.6,
        physical: 9,
        true_: 1.5,
      },
    },
    tagArrays: [[26, 2, 32, 47, 67, 68], [89], [80, 103], [99], [102], [102]],
    ids: {
      kebab: 'zilean',
      ddragon: 'Zilean',
      cdragon: 26,
      wiki: 'Zilean',
      universe: 'Zilean',
    },
    spotlightVideoID: '',
  },
  {
    name: 'Zoe',
    title: 'the Aspect of Twilight',
    roles: ['Mage', 'Support'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Zoe.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zoe_0.jpg',
    abilities: [
      {
        name: 'More Sparkles!',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/Zoe_P.png',
        description:
          "Zoe's next basic attack after casting a spell deals bonus magic damage.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0142/ability_0142_P1.webm',
      },
      {
        name: 'Paddle Star!',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ZoeQ.png',
        description:
          'Zoe fires a missile that she can redirect in flight. Deals more damage the longer it flies in a straight line.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0142/ability_0142_Q1.webm',
      },
      {
        name: 'Spell Thief',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ZoeW.png',
        description:
          'Zoe can pick up the remnants of enemy summoner spell and active item casts and cast them once herself. Whenever she casts a summoner spell, she gains 3 missiles that fire at the nearest target.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0142/ability_0142_W1.webm',
      },
      {
        name: 'Sleepy Trouble Bubble',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ZoeE.png',
        description:
          'Causes the target to become drowsy, then fall asleep. The first source of damage that breaks the sleep is doubled, up to a cap.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0142/ability_0142_E1.webm',
      },
      {
        name: 'Portal Jump',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ZoeR.png',
        description:
          'Blink to a nearby position for 1 second. Then blink back.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0142/ability_0142_R1.webm',
      },
    ],
    lanes: ['Middle'],
    releaseDate: '2017-11-21',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V7.23',
    attackRange: 550,
    region: 'Targon',
    species: 'Aspect Host',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 2,
      mobility: 2,
      utility: 1,
      difficulty: 3,
      style: 100,
      damageBreakdown: {
        magic: 82.6,
        physical: 7.3,
        true_: 10,
      },
    },
    spotlightVideoID: 'HhwRz47Kk2Y',
    tagArrays: [
      [26, 67, 68],
      [53],
      [91, 101],
      [108, 100],
      [80, 24, 25, 101],
      [101],
    ],
    ids: {
      kebab: 'zoe',
      ddragon: 'Zoe',
      cdragon: 142,
      wiki: 'Zoe',
      universe: 'Zoe',
    },
  },
  {
    name: 'Zyra',
    title: 'Rise of the Thorns',
    roles: ['Mage', 'Support'],
    portrait:
      'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Zyra.png',
    splash:
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zyra_0.jpg',
    abilities: [
      {
        name: 'Garden of Thorns',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/ZyraP.png',
        description:
          'Seeds spawn around Zyra periodically, becoming faster with level. Zyra can cast Deadly Spines or Grasping Roots near seeds to grow plants, who fight for Zyra.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0143/ability_0143_P1.webm',
      },
      {
        name: 'Deadly Spines',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ZyraQ.png',
        description:
          'Thick vines spread through the ground and explode into spines, dealing magic damage to enemies within the area. If cast near a seed, Deadly Spines grows a Thorn Spitter plant, which fires at enemies from afar.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0143/ability_0143_Q1.webm',
      },
      {
        name: 'Rampant Growth',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ZyraW.png',
        description:
          "Zyra plants a seed, lasting up to 60 seconds. Deadly Spines and Grasping Roots cast near seeds will turn them into plants who fight for Zyra. Zyra can store multiple seeds at once, and killing enemies reduces Rampant Growth's recharge time.",
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0143/ability_0143_W1.webm',
      },
      {
        name: 'Grasping Roots',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ZyraE.png',
        description:
          'Zyra sends forth vines through the ground to ensnare her target, dealing damage and rooting enemies they come across. If cast near a seed, Grasping Roots grows a Vine Lasher, whose short range attacks reduce enemy Movement Speed.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0143/ability_0143_E1.webm',
      },
      {
        name: 'Stranglethorns',
        img: 'https://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/ZyraR.png',
        description:
          'Zyra summons a twisted thicket at her target location, dealing damage to enemies as it expands and knocking them airborne as it contracts. Plants within the thicket are enraged.',
        video:
          'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0143/ability_0143_R1.webm',
      },
    ],
    lanes: ['Support'],
    releaseDate: '2012-07-24',
    resource: 'Mana',
    rangeType: 'Ranged',
    releasePatch: 'V1.0.0.143',
    attackRange: 575,
    region: 'Ixtal',
    species: 'Unknown',
    ratings: {
      damage: 3,
      toughness: 1,
      control: 3,
      mobility: 1,
      utility: 1,
      difficulty: 2,
      style: 100,
      damageBreakdown: {
        magic: 87.5,
        physical: 3.5,
        true_: 9,
      },
    },
    spotlightVideoID: 'v9DLY0Qrcm4',
    tagArrays: [
      [5, 26, 67, 68],
      [108],
      [103],
      [103],
      [80, 27, 101],
      [75, 80, 103],
    ],
    ids: {
      kebab: 'zyra',
      ddragon: 'Zyra',
      cdragon: 143,
      wiki: 'Zyra',
      universe: 'Zyra',
    },
  },
] as Champion[];
