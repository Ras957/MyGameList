package com.afcarrasquilla.mygamelist;

import com.afcarrasquilla.mygamelist.models.Juego;
import com.afcarrasquilla.mygamelist.models.JuegoModelo;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;

import static org.junit.Assert.*;

/**
 * Example local unit test, which will execute on the development machine (host).
 *
 * @see <a href="http://d.android.com/tools/testing">Testing documentation</a>
 */
public class ExampleUnitTest {

    private JuegoModelo model;

    @Before
    public void setUp(){
        model = JuegoModelo.getInstance();
    }

    @After
    public void tearDown() {
        model.close();
    }

    @Test
    public void addition_isCorrect() {
        assertEquals(4, 2 + 2);
    }


}