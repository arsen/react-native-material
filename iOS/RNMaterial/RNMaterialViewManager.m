//
//  RNMaterialViewManager.m
//  RNMaterial
//
//  Created by Arsen Ghazaryan on 12/24/16.
//  Copyright © 2016 Arsen Ghazaryan. All rights reserved.
//

#import "RCTViewManager.h"
#import "RCTEventDispatcher.h"
#import "UIView+React.h"
#import "RNMaterialView.h"

@interface RNMaterialViewManager : RCTViewManager <RNMaterialViewDelegate>
@end

@implementation RNMaterialViewManager

RCT_EXPORT_MODULE()

- (UIView*)view
{
    RNMaterialView *view = [[RNMaterialView alloc] init];
    view.delegate = self;
    return view;
}

#pragma mark - MKToggleViewDelegate

- (void)touchable:(RNMaterialView *)view touchesBegan:(UITouch *)touch
{
    [self sendTouchEvent:@"TOUCH_DOWN" touch:touch source:view];
}

- (void)touchable:(RNMaterialView *)view touchesMoved:(UITouch *)touch
{
    [self sendTouchEvent:@"TOUCH_MOVE" touch:touch source:view];
}

- (void)touchable:(RNMaterialView *)view touchesEnded:(UITouch *)touch
{
    [self sendTouchEvent:@"TOUCH_UP" touch:touch source:view];
}

- (void)touchable:(RNMaterialView *)view touchesCancelled:(UITouch *)touch
{
    [self sendTouchEvent:@"TOUCH_CANCEL" touch:touch source:view];
}

- (void)sendTouchEvent:(NSString*)type touch:(UITouch*)touch source:(RNMaterialView*)source
{
    CGPoint location = [touch locationInView:source];
    NSDictionary *dict = @{
                           @"target": source.reactTag,
                           @"type": type,
                           @"x": [NSNumber numberWithFloat:location.x],
                           @"y": [NSNumber numberWithFloat:location.y],
                           };
    [self.bridge.eventDispatcher sendInputEventWithName:@"topChange" body:dict];
}

@end
