package com.example.bmicalculator;

import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    EditText etWeight, etHeight;
    Button btnCalculateBMI;
    TextView tvBMIResult;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        etWeight = findViewById(R.id.etWeight);
        etHeight = findViewById(R.id.etHeight);
        btnCalculateBMI = findViewById(R.id.btnCalculateBMI);
        tvBMIResult = findViewById(R.id.tvBMIResult);

        btnCalculateBMI.setOnClickListener(v -> {
            try {
                double weight = Double.parseDouble(etWeight.getText().toString());
                double height = Double.parseDouble(etHeight.getText().toString());

                if(height <= 0 || weight <= 0){
                    Toast.makeText(this, "Enter valid positive values", Toast.LENGTH_SHORT).show();
                    return;
                }

                double bmi = weight / (height * height);
                String category;

                if(bmi < 18.5){
                    category = "Underweight";
                } else if(bmi < 25){
                    category = "Normal";
                } else if(bmi < 30){
                    category = "Overweight";
                } else {
                    category = "Obese";
                }

                String resultText = String.format("BMI: %.2f\nCategory: %s", bmi, category);
                tvBMIResult.setText(resultText);

            } catch (NumberFormatException e) {
                Toast.makeText(this, "Please enter valid numbers", Toast.LENGTH_SHORT).show();
            }
        });
    }
}