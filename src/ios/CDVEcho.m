//
//  CDVEcho.m
//  HybridIOSApp
//
//  Created by Heping on 8/3/16.
//
//

#import "CDVEcho.h"

@implementation CDVEcho
-(void)print:(CDVInvokedUrlCommand*)command
{
    NSArray* args=command.arguments;
    NSLog(@"%@",[args firstObject]);
    CDVPluginResult* result=[CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:@"success!"];
    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}

-(void)error:(CDVInvokedUrlCommand*)command
{
    NSArray* args=command.arguments;
    NSLog(@"Error(%@,%@)",[args objectAtIndex:0],[args objectAtIndex:1]);
    CDVPluginResult* result=[CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:@"success!"];
    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}
@end
