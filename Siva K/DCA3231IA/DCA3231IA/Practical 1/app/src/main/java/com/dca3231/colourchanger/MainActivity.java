package com.example.colorchanger;

import android.graphics.Color;
import android.os.Bundle;
import android.widget.Button;
import android.widget.LinearLayout;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    LinearLayout mainLayout;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main); // this will work

        // Connect layout
        mainLayout = findViewById(R.id.mainLayout);

        // Connect buttons
        Button btnRed = findViewById(R.id.btnRed);
        Button btnGreen = findViewById(R.id.btnGreen);
        Button btnBlue = findViewById(R.id.btnBlue);

        // Click events
        btnRed.setOnClickListener(v -> mainLayout.setBackgroundColor(Color.RED));
        btnGreen.setOnClickListener(v -> mainLayout.setBackgroundColor(Color.GREEN));
        btnBlue.setOnClickListener(v -> mainLayout.setBackgroundColor(Color.BLUE));
    }
}