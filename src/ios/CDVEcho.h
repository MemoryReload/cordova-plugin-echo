//
//  CDVEcho.h
//  HybridIOSApp
//
//  Created by Heping on 8/3/16.
//
//

#import <Cordova/CDVPlugin.h>

@interface CDVEcho : CDVPlugin
-(void)print:(CDVInvokedUrlCommand*)command;
-(void)error:(CDVInvokedUrlCommand*)command;
@end
