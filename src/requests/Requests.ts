import { LoginToken } from "../types/loginToken";
import { CallCenter, UserModel } from "../types/UserModel";
import { Role } from "../components/Enums/Role";
import axios from "axios";
import { Database } from "../types/Database";
import { Survey } from "../types/Survey";
import { NextNumberResponse } from "../types/NextNumberResponse";
import { Call } from '../types/Call'
import { NewSurvey } from '../types/NewSurvey'

const BASE_URL = (path: string = "") =>
  "http://192.168.0.98:8080" + path;

const loginOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Basic Y2xpZW50SWQ6Y2xpZW50U2VjcmV0"
  }
};
export const login = (
  username: string,
  password: string
): Promise<LoginToken> =>
  fetch(
    BASE_URL(
      "/oauth/token?grant_type=password&username=" +
        username +
        "&password=" +
        password
    ),
    loginOptions
  )
    .then(response => response.json())
    .catch(console.log);

export const getCurrentUser = (): Promise<UserModel> =>
  fetch(BASE_URL("/users/current"))
    .then(res => res.json())
    .catch(err => {
      localStorage.clear();
      console.log(err);
    });

export const getUserByRole = (role: Role) =>
  fetch(BASE_URL("/users/all/" + role.toString()))
    .then(res => res.json())
    .catch(console.log);

export const addUser = (user: UserModel) =>
  fetch(BASE_URL("/users/OPERATOR"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  }).catch(console.log);

export const updateUser = (user: UserModel) =>
  fetch(BASE_URL("/users"), {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  }).catch(console.log);

export const getCallcenters = (): Promise<CallCenter[]> =>
  fetch(BASE_URL("/callCenters"))
    .then(res => res.json())
    .catch(console.log);

export const uploadDatabase = (multipartFile: any) => {
  axios
    .post(BASE_URL("/db"), multipartFile, {
      headers: {
        accept: "*/*",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + window.localStorage.getItem("token")
      }
    })
    .then(console.log)
    .catch(console.log);
};

export const getDatabases = (): Promise<Database[]> =>
  fetch(BASE_URL("/db"))
    .then(res => res.json())
    .catch(console.log);

export const getSurveys = (): Promise<Survey[]> =>
  fetch(BASE_URL("/surveys"))
    .then(res => res.json())
    .catch(console.log);

export const getNextNumber = (surveyId: string): Promise<NextNumberResponse> =>
  fetch(BASE_URL("/calls/next") + `?surveyId=${surveyId}`)
    .then(res => res.json())
    .catch(console.log);

export const getCurrentCall = (): Promise<Call> =>
  fetch(BASE_URL("/calls"))
    .then(res => res.json())
    .catch(console.log);

export const getMySurveys = () =>
  fetch(BASE_URL("/users/current/surveys"))
    .then(res => res.json())
    .catch(console.log);

export const addCallCenter = (callCenter: CallCenter) =>
  fetch(BASE_URL("/callCenters"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(callCenter)
  })

export const updateCallCenter = (callCenter: CallCenter) =>
  fetch(BASE_URL("/callCenters"), {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(callCenter)
  }).catch(console.log);

export const createSurvey = (survey: NewSurvey) =>
  fetch(BASE_URL("/surveys"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(survey)
  }).then( res => res.json())