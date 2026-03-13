package com.example.inchestocm;

import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    EditText etInches;
    Button btnConvert;
    TextView tvResult;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        etInches = findViewById(R.id.etInches);
        btnConvert = findViewById(R.id.btnConvert);
        tvResult = findViewById(R.id.tvResult);

        btnConvert.setOnClickListener(v -> {
            try {
                double inches = Double.parseDouble(etInches.getText().toString());
                double cm = inches * 2.54;

                tvResult.setText(String.format("%.2f inches = %.2f cm", inches, cm));
            } catch (NumberFormatException e) {
                Toast.makeText(this, "Please enter a valid number", Toast.LENGTH_SHORT).show();
            }
        });
    }
}