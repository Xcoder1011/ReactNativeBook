export enum RouteName {
    Home = 'ReactiveBook',
    Image = 'Image',
    Main = 'Main',
    Foo = 'Foo',
    Bar = 'Bar',
}

export type RootStackParamList = {
    [RouteName.Home]: undefined;
    [RouteName.Image]: { userId: string };
    [RouteName.Main]: undefined;
    [RouteName.Foo]: undefined;
    [RouteName.Bar]: { userId: string };
}
