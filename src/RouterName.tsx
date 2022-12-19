export enum RouterName {
    Home = 'ReactiveBook',
    Image = 'Image',
    Main = 'Main',
    Foo = 'Foo',
    Bar = 'Bar',
}

export type RootStackParamList = {
    [RouterName.Home]: undefined;
    [RouterName.Image]: { userId: string };
    [RouterName.Main]: undefined;
    [RouterName.Foo]: undefined;
    [RouterName.Bar]: { userId: string };
}
