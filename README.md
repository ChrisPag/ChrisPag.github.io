# Spacestagram

## About
This webpage allows users to view images using NASA's Astronomy Picture of the Day (APOD) API and their desciptive data, such as the title and date of the images.  Users can also like and unlike images. 

## Additional features
- A loading state was added while the user waits for NASA's API to return the data
- Users can view images between the dates of their choosing (for example, view all images from APOD between 2021-12-30 and 2022-01-05)
- Error handling 
  - When users try to submit an empty form, they are notified they must fill out the required info
  - If posts cannot be loaded, a message is displayed to let the user know

## Further Steps
The webpage only allows users to pull images from up until 2021-12-01. This is to prevent too many images from loading on to the page. In the future, I would like the user to be able to view images all the way back to 1995 (when APOD first started). In order to do this, only 5 images would be shown at the same time, and a show more button would appear at the bottom of the page if the user requested more images, allowing for 5 more posts to be shown.

## Technologies
This webpage was created using ReactJS.

>## Getting Started with Create React App
>
>This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
>
>### Available Scripts
>
>In the project directory, you can run:
>
>### `npm start`
>
>Runs the app in the development mode.\
>Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

>The page will reload when you make changes.\
>You may also see any lint errors in the console.
