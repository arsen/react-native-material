package io.devshot.rnmaterial;

import android.annotation.SuppressLint;
import android.content.Context;
import android.util.Log;
import android.view.MotionEvent;

import com.facebook.react.views.view.ReactViewGroup;

import javax.annotation.Nonnull;


@SuppressLint("ViewConstructor")
public class RNMaterialView extends ReactViewGroup {
    @Nonnull
    private final OnTouchListener onTouchListener;

    public RNMaterialView(Context context,
                       @Nonnull OnTouchListener onTouchListener) {
        super(context);
        this.onTouchListener = onTouchListener;
    }

    @Override
    public boolean onTouchEvent(MotionEvent ev) {
        return this.onTouchListener.onTouch(this, ev);
    }
}