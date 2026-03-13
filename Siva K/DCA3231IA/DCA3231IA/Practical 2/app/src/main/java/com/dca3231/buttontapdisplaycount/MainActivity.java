package com.example.tapcounter;

import android.os.Bundle;
import android.widget.Button;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    Button btnTap;
    TextView tvCount;
    int count = 0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        btnTap = findViewById(R.id.btnTap);
        tvCount = findViewById(R.id.tvCount);

        btnTap.setOnClickListener(v -> {
            count++;
            tvCount.setText("Taps: " + count);
        });
    }
}