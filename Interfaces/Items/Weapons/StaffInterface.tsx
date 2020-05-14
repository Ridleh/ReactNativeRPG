export default interface Staff{
    Name: string,
    Image: NodeRequire
    Type: any //?? enum
    Price: number,
    HealthModifier: number,
    AttackModifier: number,
    ResistanceModifier: number,
    DefenceModifier: number,
    MagicModifier: number,
    MindModifier: number,
    LuckModifier: number,
    SpeedModifier: number,
    EquippedBy: string
    
}