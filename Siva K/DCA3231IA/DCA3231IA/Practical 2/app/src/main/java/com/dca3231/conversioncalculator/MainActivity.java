package com.example.temperatureconverter;

import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    EditText etFahrenheit;
    Button btnConvert;
    TextView tvCelsius;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Connect views
        etFahrenheit = findViewById(R.id.etFahrenheit);
        btnConvert = findViewById(R.id.btnConvert);
        tvCelsius = findViewById(R.id.tvCelsius);

        // Click listener for conversion
        btnConvert.setOnClickListener(v -> {
            String input = etFahrenheit.getText().toString().trim();

            if(!input.isEmpty()){
                double fahrenheit = Double.parseDouble(input);
                double celsius = (fahrenheit - 32) * 5 / 9;
                tvCelsius.setText(String.format("%.2f °C", celsius));
            } else {
                tvCelsius.setText("Please enter a value");
            }
        });
    }
}