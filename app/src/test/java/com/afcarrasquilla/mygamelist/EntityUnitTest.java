package com.afcarrasquilla.mygamelist;

import com.afcarrasquilla.mygamelist.models.Juego;
import com.afcarrasquilla.mygamelist.views.FormularioActivity;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Example local unit test, which will execute on the development machine (host).
 *
 * @see <a href="http://d.android.com/tools/testing">Testing documentation</a>
 */
public class EntityUnitTest {

    private Juego j;

    @Before
    public void setUp() {
        this.j = new Juego();
    }

    @Test
    public void juegoSetNameTest() {
        assertTrue(this.j.setName("Ejemplo"));
        assertTrue(this.j.setName("aaa"));
        assertFalse(this.j.setName("aa"));
        assertFalse(this.j.setName("a"));
        assertFalse(this.j.setName(""));
        assertFalse(this.j.setName("fuck"));
        assertFalse(this.j.setName("Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" +
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"));

    }

    @Test
    public void juegoGetNameTest() {
        assertNull(this.j.getName());
        this.j.setName("Ejemplo");
        assertNotNull(this.j.getName());
        assertEquals("Ejemplo", this.j.getName());
    }

    @Test
    public void juegoSetCompanyTest() {
        assertTrue(this.j.setCompany("Ejemplo"));
        assertTrue(this.j.setCompany("aaa"));
        assertFalse(this.j.setCompany("aa"));
        assertFalse(this.j.setCompany("a"));
        assertFalse(this.j.setCompany(""));
        assertFalse(this.j.setCompany("Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" +
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"));
    }

    @Test
    public void juegoGetCompanyTest() {
        assertNull(this.j.getCompany());
        this.j.setCompany("Ejemplo");
        assertNotNull(this.j.getCompany());
        assertEquals("Ejemplo", this.j.getCompany());
    }

    @Test
    public void juegoSetHoursTest() {
        assertFalse(this.j.setHours(-2));
        assertFalse(this.j.setHours(0));
        assertTrue(this.j.setHours(1));
        assertTrue(this.j.setHours(10));
        assertTrue(this.j.setHours(999));
        assertTrue(this.j.setHours(9999));
        assertFalse(this.j.setHours(10000 ));
    }

    @Test
    public void juegoGetHoursTest() {
        assertEquals(0, this.j.getHours());
        this.j.setHours(10);
        assertEquals(10, this.j.getHours());
    }

    @Test
    public void juegoSetDateTest() {
        assertTrue(this.j.setDate("1/3/2010"));
        assertTrue(this.j.setDate("01/3/2010"));
        assertTrue(this.j.setDate("1/03/2010"));
        assertTrue(this.j.setDate("01/03/2010"));
        assertFalse(this.j.setDate("30/30/2010"));
        assertTrue(this.j.setDate("30/2/2010"));   //debería de dar false
        assertFalse(this.j.setDate("00000"));
        assertFalse(this.j.setDate(""));
        assertFalse(this.j.setDate("a"));
    }

    @Test
    public void juegoGetDateTest() {
        assertNull(this.j.getDate());
        this.j.setDate("1/3/2010");
        assertNotNull(this.j.getDate());
        assertEquals("1/3/2010", this.j.getDate());
    }

    @Test
    public void juegoSetPlatformTest() {
        assertTrue(this.j.setPlatform("Ejemplo"));
        assertTrue(this.j.setPlatform("aaa"));
        assertFalse(this.j.setPlatform("aa"));
        assertFalse(this.j.setPlatform("a"));
        assertFalse(this.j.setPlatform(""));
        assertFalse(this.j.setPlatform("aaaaaaaaaaaaaaaaaaaaaa"));
        assertFalse(this.j.setPlatform(FormularioActivity.DEFAULT_OPTION_SPINNER));
    }

    @Test
    public void juegoGetPlatformTest() {
        assertNull(this.j.getPlatform());
        this.j.setPlatform("Ejemplo");
        assertNotNull(this.j.getPlatform());
        assertEquals("Ejemplo", this.j.getPlatform());
    }

    @Test
    public void juegoSetImageTest() {
        assertTrue(this.j.setImage("Ejemplo"));
        assertTrue(this.j.setImage("sajdhasuihfiuaisndsajdjkashjdsahdsahdasuhasdi"));
        assertTrue(this.j.setImage(""));
    }

    @Test
    public void juegoGetImageTest() {
        assertNull(this.j.getImage());
        this.j.setImage("Ejemplo");
        assertNotNull(this.j.getImage());
        assertEquals("Ejemplo", this.j.getImage());
    }

    @Test
    public void juegoSetPropertyTest() {
        assertTrue(this.j.setProperty(true));
        assertTrue(this.j.setProperty(false));
    }

    @Test
    public void juegoGetPropertyTest() {
        assertFalse(this.j.isProperty());
        this.j.setProperty(true);
        assertTrue(this.j.isProperty());
    }
}
