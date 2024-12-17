export class Filter {
  hideFlasks = true;
  hideFlasksType = FlaskType.All;
  hideScrolls = true;
  hideJewellery = true;
  hideJewelleryOfRarity = RarityToHide.Normal;
  hideNormalAndMagicItems = true;
  hideNormalAndMagicItemsOfRarity = RarityToHide.NormalAndMagic;
  hideGold = true;
  hideGoldLowerThan = 50;
  hideCommonCharms = true;
  hideRunes = false;
  hideCommonCurrency = false;

  showSocketedItems = true;
  showSocketedItemsType = SocketedItemType.All;
  showQualityItems = true;
  showQualityItemsType = QualityItemType.All;
  showUltimateLifeFlasks = true;
  showUltimateLifeFlasksMinQuality = 10;

  highlightUniques = true;
  highlightRareJewellery = true;
  highlightSkillGems = false;
  highlightSkillGemsLevel: number | null = null;

  weaponFilters: WeaponFilter[] = [];

  armourFilters: ArmourFilter[] = [];

  showBodyArmour = false;
  showBodyArmourArm: number | null = null;
  showBodyArmourEs: number | null = null;
  showBodyArmourEva: number | null = null;

  showHelmet = false;
  showHelmetArm: number | null = null;
  showHelmetEs: number | null = null;
  showHelmetEva: number | null = null;

  showGloves = false;
  showGlovesArm: number | null = null;
  showGlovesEs: number | null = null;
  showGlovesEva: number | null = null;

  showBoots = false;
  showBootsArm: number | null = null;
  showBootsEs: number | null = null;
  showBootsEva: number | null = null;

  dynamicWaystones = false;
  dynamicWaystonesLevel: number | null = null;
}

export class WeaponFilter {
  show = true;
  weaponType = WeaponType.Bows;
  rarity = MinimumRarity.Normal;
  baseTypeTier = BaseTypeTier.ExpertOnly;
}

export class ArmourFilter {
  show = true;
  armourType = ArmourType.BodyArmour;
  rarity = MinimumRarity.Normal;
  baseTypeTier = BaseTypeTier.ExpertOnly;
  armour = false;
  evasion = false;
  energyShield = false;
}

export enum WeaponType {
  All = 'All',
  Bows = 'Bows',
  Crossbows = 'Crossbows',
  Foci = 'Foci',
  OneHandMaces = 'One Hand Maces',
  Quivers = 'Quivers',
  QuarterStaves = 'Quarterstaves',
  Sceptres = 'Sceptres',
  Shields = 'Shields',
  Staves = 'Staves',
  TwoHandMaces = 'Two Hand Maces',
  Wands = 'Wands',
}

export enum ArmourType {
  All = "All",
  BodyArmour = "Body Armour",
  Helmet = "Helmet",
  Gloves = "Gloves",
  Boots = "Boots",
}

export enum MinimumRarity {
  Magic = "Magic",
  Normal = "Normal",
}

export enum BaseTypeTier {
  ExpertOnly = "ExpertOnly",
  AdvancedAndExpert = "AdvancedAndExpert",
  All = "All",
}

export enum FlaskType {
  All = "All",
  AllButUltimate = "AllButUltimate",
}

export enum SocketedItemType {
  All = "All",
  TwoOrMoreSockets = "TwoOrMoreSockets",
}

export enum QualityItemType {
  All = "All",
  MinimumTenQuality = "MinimumTenQuality",
}

export enum RarityToHide {
  Normal = "Normal",
  NormalAndMagic = "NormalAndMagic",
}
