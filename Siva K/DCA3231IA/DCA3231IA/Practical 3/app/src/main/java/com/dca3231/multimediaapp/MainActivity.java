package com.example.audioplayer;

import android.media.MediaPlayer;
import android.os.Bundle;
import android.widget.Button;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    Button btnPlay, btnPause, btnStop;
    MediaPlayer mediaPlayer;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Connect views
        btnPlay = findViewById(R.id.btnPlay);
        btnPause = findViewById(R.id.btnPause);
        btnStop = findViewById(R.id.btnStop);

        // Initialize MediaPlayer with audio in res/raw
        mediaPlayer = MediaPlayer.create(this, R.raw.sample_audio);

        // Play button
        btnPlay.setOnClickListener(v -> {
            if(mediaPlayer != null && !mediaPlayer.isPlaying()){
                mediaPlayer.start();
            }
        });

        // Pause button
        btnPause.setOnClickListener(v -> {
            if(mediaPlayer != null && mediaPlayer.isPlaying()){
                mediaPlayer.pause();
            }
        });

        // Stop button
        btnStop.setOnClickListener(v -> {
            if(mediaPlayer != null){
                mediaPlayer.stop();
                mediaPlayer.reset();
                mediaPlayer = MediaPlayer.create(this, R.raw.sample_audio);
            }
        });
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if(mediaPlayer != null){
            mediaPlayer.release();
            mediaPlayer = null;
        }
    }
}