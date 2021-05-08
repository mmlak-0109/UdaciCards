import AsyncStorage from "@react-native-async-storage/async-storage"
import * as Notifications from 'expo-notifications';

export const generateUID = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

function createNotification (dateTime) {
  return {
    content: {
      title: 'Time to Study!',
      body: "Don't forget to test your skills with a quiz!",
      sound: true,
      vibrate: true,
      priority: 'high',
    },
    trigger: dateTime
    }
}

const NOTIFICATION_KEY = 'UdaciCards:notifications'

export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      // console.log("notif key data:", data);
      if (data === null) {
        Notifications.requestPermissionsAsync()
          .then(({ status }) => {
            // console.log("permi status: ", status);
            if (status === 'granted') {
              // console.log("Permission Granted");
              Notifications.cancelAllScheduledNotificationsAsync()

              Notifications.setNotificationHandler({
                handleNotification: async () => ({
                  shouldShowAlert: true,
                  shouldPlaySound: false,
                  shouldSetBadge: false,
                }),
              });
      
              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate())
              tomorrow.setHours(20)
              tomorrow.setMinutes(0)
      
              Notifications.scheduleNotificationAsync(
                createNotification(tomorrow),
              )
      
              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}