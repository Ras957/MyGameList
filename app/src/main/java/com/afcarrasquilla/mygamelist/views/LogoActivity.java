package com.afcarrasquilla.mygamelist.views;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.Window;
import android.view.WindowManager;

import com.afcarrasquilla.mygamelist.R;

public class LogoActivity extends AppCompatActivity {

    private int SLEEP_TIMER = 5;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);


        requestWindowFeature(Window.FEATURE_NO_TITLE);
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);

        setContentView(R.layout.activity_logo);
        getSupportActionBar().hide();
        LogoLauncher logoLanuncher = new LogoLauncher();
        logoLanuncher.start();
    }

    private class LogoLauncher extends Thread{
        public void run(){
            try{
                sleep(1000 * SLEEP_TIMER);
            }catch (InterruptedException e){
                e.printStackTrace();
            }

            Intent intent = new Intent(LogoActivity.this, ListadoActivity.class);
            startActivity(intent);
            LogoActivity.this.finish();
        }
    }
}
