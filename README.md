#Johnny Five Test
For now I'm only going to provide minamal instructions in this readme.md. As this project grows, or maybe some other reason, I'll eventually make a more comprehensive readme.md.

I would love any feedback since this is my first endeavor into using an Arduino (over the internet) :D

#Demonstration
[JohnyFiveTest Demonstation](https://player.vimeo.com/video/125165286)

[![JohnnyFiveTest Demonstation](https://i.vimeocdn.com/video/515164806_295x166.jpg)](https://player.vimeo.com/video/125165286)

#Setting Up the Arduino
Please go the Johnny Five [documentation](https://github.com/rwaldron/johnny-five) and follow how setup the Arduino in the *Setup and Assemble Arduino* section.
![Overview of Circuitry](https://farm8.staticflickr.com/7680/16960708877_f1f6555cf8_h.jpg)
![Connections of Arduino](https://farm8.staticflickr.com/7651/16960709387_7d0869ee77_h.jpg)
![Connections of Breadboard](https://farm8.staticflickr.com/7585/16981947589_627d3f88ca_h.jpg)



#Setting Up the Server
This server is running with NodeJS, so if you haven't already install it on your machine :)

**Did you fork or clone this repo?**
If you forked or cloned this repo, then all the dependencies will be provided and you'll be golden.

Otherwise, you'll also need to download all the needed packages from npm and bower.
To do this, make sure you are in the same directory as ```package.json``` and ```bower.json```.

Then in the terminal run these commands:

```bash
npm install
bower install
```

#Running the Server
Once you finish going through the steps above, you can now run the server.

To do this, run this command in the terminal:
```
node server.js
```

Once the server is up and running, you can now open the webpage to control the arduino.

There are two ways to do this:

###With Gulp JS
Gulp.js is a build tool that I used to help be create the web page that controls the arduino. It is also used to serve the html during the dev process and update code live.

If you don't have gulp.js installed globally go their [repo](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) and follow their *Getting Started* section.

Now to serve the webpage via Gulp, you'll want to run this command within the working directory:
```bash
gulp
```

To access the webpage, open you browser and go to ```localhost:3000```

###Without Gulp JS
This is actually really easy to run. Just open ```index.html``` with you favorite web browser (that is not IE) and you good to go!

***Importante!***
The server runs on ```localhost:8080```

If you're using Gulp.js, the webpage will be running on ```localhost:3000```
