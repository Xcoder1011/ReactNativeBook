//
//  RNContainerViewController.m
//  react_native_book
//
//  Created by Xcoder1011 on 2022/12/15.
//

#import "RNContainerViewController.h"
#import <React/RCTRootView.h>
#import <React/RCTAppSetupUtils.h>
#import <React/RCTBundleURLProvider.h>

@interface RNContainerViewController ()<RCTBridgeDelegate>

@end

@implementation RNContainerViewController

- (void)viewDidLoad {
    [super viewDidLoad];
//  NSURL *jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.bundle?platform=ios"];
//  RCTRootView *rootView =
//    [[RCTRootView alloc] initWithBundleURL: jsCodeLocation
//                                moduleName: @"react_native_book"
//                         initialProperties:
//                           @{
//                             @"scores" : @[
//                               @{
//                                 @"name" : @"Alex",
//                                 @"value": @"42"
//                                },
//                               @{
//                                 @"name" : @"Joel",
//                                 @"value": @"10"
//                               }
//                             ]
//                           }
//                             launchOptions: nil];
  
  RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:nil];
  UIView *rootView = RCTAppSetupDefaultRootView(bridge, @"react_native_book", nil);

  if (@available(iOS 13.0, *)) {
    rootView.backgroundColor = [UIColor systemBackgroundColor];
  } else {
    rootView.backgroundColor = [UIColor whiteColor];
  }
  
  self.view = rootView;
}


- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge {
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}
@end
