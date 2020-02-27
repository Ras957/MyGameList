package com.afcarrasquilla.mygamelist.interfaces;

import androidx.recyclerview.widget.RecyclerView;

import com.afcarrasquilla.mygamelist.models.Juego;

import java.util.ArrayList;

public interface ListadoInterface {
    public interface View{
        void lanzarFormulario(int id);
        void lanzarBuscado();
        void lanzarSobre();
        void lanzarAyuda();
        void borrarRowData(RecyclerView.ViewHolder viewHolder);
    }

    public interface Presenter{
        void onClickAdd();
        void onClickSearch();
        void onClickAbout();
        void onClickHelp();
        ArrayList<Juego> getAllGames();
        void onClickJuego(int id);
        void onSwipe();
        void deleteGame(int id);
        ArrayList<Juego> searchGames(String[] datos);
        String countAllGames();
        String countGames(ArrayList<Juego> juegos);
    }
}
