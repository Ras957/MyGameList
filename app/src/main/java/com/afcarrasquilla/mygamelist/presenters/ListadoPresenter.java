package com.afcarrasquilla.mygamelist.presenters;

import androidx.recyclerview.widget.RecyclerView;

import com.afcarrasquilla.mygamelist.interfaces.ListadoInterface;
import com.afcarrasquilla.mygamelist.models.Juego;
import com.afcarrasquilla.mygamelist.models.JuegoModelo;

import java.util.ArrayList;

public class ListadoPresenter implements ListadoInterface.Presenter{
    private ListadoInterface.View view;
    private JuegoModelo juego;

    public ListadoPresenter(ListadoInterface.View view){
        this.view = view;
        this.juego = JuegoModelo.getInstance();
    }

    @Override
    public ArrayList<Juego> getAllGames(){
            return juego.getAllGames();
    }

    @Override
    public ArrayList<Juego> searchGames(String[] datos){
        return juego.searchGames(datos);
    }

    @Override
    public String countGames (ArrayList<Juego> juegos){
        if (juegos.size() == 1){
            return juegos.size()+" juego encontrados";
        }else{
            return juegos.size()+" juegos encontrados";
        }
    }

    @Override
    public String countAllGames(){
        if (juego.countAll() == 1){
            return juego.countAll()+" juego encontrados";
        }else{
            return juego.countAll()+" juegos encontrados";
        }
    }

    @Override
    public void deleteGame(int id){
        juego.deleteGame(id);
    }

    @Override
    public void onClickJuego(int id) {
        view.lanzarFormulario(id);
    }

    @Override
    public void onClickAdd(){
        view.lanzarFormulario(-1);
    }

    @Override
    public void onClickSearch(){ view.lanzarBuscado();}

    @Override
    public void onClickAbout(){ view.lanzarSobre();}

    @Override
    public void onClickHelp(){ view.lanzarAyuda();}

    @Override
    public void onSwipe(){view.borrarRowData(null);};
}



