//
//  RNMaterialView.m
//  RNMaterial
//
//  Created by Arsen Ghazaryan on 12/24/16.
//  Copyright © 2016 Arsen Ghazaryan. All rights reserved.
//

#import "RNMaterialView.h"

@implementation RNMaterialView

#pragma mark - Touch event handling

- (void)touchesBegan:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event
{
    UITouch *touch = [touches anyObject];
    if (self.delegate) {
        [self.delegate touchable:self touchesBegan:touch];
    }
    [super touchesBegan:touches withEvent:event];
}

- (void)touchesEnded:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event
{
    UITouch *touch = [touches anyObject];
    if (self.delegate) {
        [self.delegate touchable:self touchesEnded:touch];
    }
    [super touchesEnded:touches withEvent:event];
}

- (void)touchesMoved:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event
{
    UITouch *touch = [touches anyObject];
    if (self.delegate) {
        [self.delegate touchable:self touchesMoved:touch];
    }
    [super touchesMoved:touches withEvent:event];
}

- (void)touchesCancelled:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event
{
    UITouch *touch = [touches anyObject];
    if (self.delegate) {
        [self.delegate touchable:self touchesCancelled:touch];
    }
    [super touchesCancelled:touches withEvent:event];
}

@end
