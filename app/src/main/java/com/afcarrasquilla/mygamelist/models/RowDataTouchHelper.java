package com.afcarrasquilla.mygamelist.models;

import android.graphics.Canvas;
import android.view.View;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.recyclerview.widget.ItemTouchHelper;
import androidx.recyclerview.widget.RecyclerView;

import com.afcarrasquilla.mygamelist.views.JuegoAdapter;

public class RowDataTouchHelper extends ItemTouchHelper.SimpleCallback {

    private rowDataTouchHelperListener listener;

    public RowDataTouchHelper(int dragDirs, int swipeDirs, rowDataTouchHelperListener listener) {
        super(dragDirs, swipeDirs);
        this.listener = listener;
    }

    @Override
    public boolean onMove(@NonNull RecyclerView recyclerView,
                          @NonNull RecyclerView.ViewHolder viewHolder,
                          @NonNull RecyclerView.ViewHolder target) {
        return false;
    }

    @Override
    public void onSelectedChanged(@Nullable RecyclerView.ViewHolder viewHolder, int actionState) {
        if (viewHolder != null) {
            View foregroundView = ((JuegoAdapter.JuegoViewHolder)viewHolder).linearLayout;
            getDefaultUIUtil().onSelected(foregroundView);
        }
    }

    @Override
    public void onChildDrawOver(@NonNull Canvas c,
                                @NonNull RecyclerView recyclerView,
                                RecyclerView.ViewHolder viewHolder, float dX, float dY,
                                int actionState, boolean isCurrentlyActive) {
        View foregroundView = ((JuegoAdapter.JuegoViewHolder) viewHolder).linearLayout;
        getDefaultUIUtil().onDrawOver(c, recyclerView, foregroundView, dX ,dY,
                actionState, isCurrentlyActive);
    }

    @Override
    public void clearView(@NonNull RecyclerView recyclerView, @NonNull RecyclerView.ViewHolder viewHolder) {
        View foregroundView = ((JuegoAdapter.JuegoViewHolder)viewHolder).linearLayout;
        getDefaultUIUtil().clearView(foregroundView);
    }

    @Override
    public void onChildDraw(@NonNull Canvas c, @NonNull RecyclerView recyclerView,
                            @NonNull RecyclerView.ViewHolder viewHolder, float dX, float dY,
                            int actionState, boolean isCurrentlyActive) {
        View foregroundView = ((JuegoAdapter.JuegoViewHolder) viewHolder).linearLayout;
        getDefaultUIUtil().onDraw(c, recyclerView, foregroundView, dX ,dY,
                actionState, isCurrentlyActive);
    }

    @Override
    public void onSwiped(@NonNull RecyclerView.ViewHolder viewHolder, int direction) {
        listener.onSwipe(viewHolder, direction, viewHolder.getAdapterPosition());
    }

    public interface  rowDataTouchHelperListener{
        void onSwipe(RecyclerView.ViewHolder viewHolder, int direction, int position);
    }
}
