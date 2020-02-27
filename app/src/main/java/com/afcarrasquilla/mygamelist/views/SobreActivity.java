package com.afcarrasquilla.mygamelist.views;

import android.os.Bundle;

import com.google.android.material.floatingactionbutton.FloatingActionButton;
import com.google.android.material.snackbar.Snackbar;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.view.View;
import android.widget.Button;

import com.afcarrasquilla.mygamelist.R;

public class SobreActivity extends AppCompatActivity {

    String TAG = "MyGameList/SobreActivity";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sobre);
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        //getSupportActionBar().setTitle("Sobre la App");
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);


    }



}
