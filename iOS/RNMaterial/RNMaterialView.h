//
//  RNMaterialView.h
//  RNMaterial
//
//  Created by Arsen Ghazaryan on 12/24/16.
//  Copyright © 2016 Arsen Ghazaryan. All rights reserved.
//

#ifndef RNMaterialView_h
#define RNMaterialView_h

#import "RCTView.h"

@class RNMaterialView;
@protocol RNMaterialViewDelegate;

/*
 * The touchable component
 */
@interface RNMaterialView : RCTView

@property (nonatomic, weak) id<RNMaterialViewDelegate> delegate;

@end

/*
 * Touche events delegate
 */
@protocol RNMaterialViewDelegate <NSObject>

@required
- (void)touchable:(MKTouchable*)view touchesBegan:(UITouch*)touch;

@required
- (void)touchable:(MKTouchable *)view touchesMoved:(UITouch *)touch;

@required
- (void)touchable:(MKTouchable *)view touchesEnded:(UITouch *)touch;

@required
- (void)touchable:(MKTouchable *)view touchesCancelled:(UITouch *)touch;

@end

#endif /* RNMaterialView_h */
