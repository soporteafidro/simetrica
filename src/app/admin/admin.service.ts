import { Injectable } from '@angular/core';
import { Auth, API } from 'aws-amplify';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor() {}

  isDuplicate(users, user, editMode): boolean {
    if (editMode) {
      const u = users.filter(
        (x) =>
          x.email === user.email ||
          x.identificacion === user.identificacion ||
          x.username === user.username
      );
      if (u.length > 1) {
        return true;
      } else {
        return false;
      }
    } else {
      return (
        users.findIndex(
          (x) =>
            x.email === user.email ||
            x.identificacion === user.identificacion ||
            x.username === user.username
        ) !== -1
      );
    }
  }

  async getUser(username): Promise<any> {
    const apiName = 'AdminQueries';
    const path = '/getUser';
    const myInit = {
      queryStringParameters: {
        username,
        limit: 5,
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${(await Auth.currentSession())
          .getAccessToken()
          .getJwtToken()}`,
      },
    };
    const { NextToken, ...rest } = await API.get(apiName, path, myInit);
    return rest;
  }

  async addToGroup(u, g): Promise<any> {
    const apiName = 'AdminQueries';
    const path = '/addUserToGroup';
    const myInit = {
      body: {
        username: u,
        groupname: g,
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${(await Auth.currentSession())
          .getAccessToken()
          .getJwtToken()}`,
      },
    };
    return await API.post(apiName, path, myInit);
  }
  async removeUserFromGroup(u, g): Promise<any> {
    const apiName = 'AdminQueries';
    const path = '/removeUserFromGroup';
    const myInit = {
      body: {
        username: u,
        groupname: g,
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${(await Auth.currentSession())
          .getAccessToken()
          .getJwtToken()}`,
      },
    };
    return await API.post(apiName, path, myInit);
  }

  async listUsersInGroup(groupName, limite, token): Promise<any> {
    const apiName = 'AdminQueries';
    const path = '/listUsersInGroup';
    const myInit = {
      queryStringParameters: {
        groupname: groupName,
        limit: limite,
        token,
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${(await Auth.currentSession())
          .getAccessToken()
          .getJwtToken()}`,
      },
    };
    const { NextToken, ...rest } = await API.get(apiName, path, myInit);
    return { rest, NextToken };
  }

  async listUsers(token): Promise<any> {
    const apiName = 'AdminQueries';
    const path = '/listUsers';
    const myInit = {
      queryStringParameters: {
        limit: 60,
        token,
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${(await Auth.currentSession())
          .getAccessToken()
          .getJwtToken()}`,
      },
    };
    const { NextToken, ...rest } = await API.get(apiName, path, myInit);
    rest.NextToken = NextToken;
    return rest;
  }

  async listGroupsForUser(username): Promise<any> {
    const apiName = 'AdminQueries';
    const path = '/listGroupsForUser';
    const myInit = {
      queryStringParameters: {
        username,
        limit: 5,
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${(await Auth.currentSession())
          .getAccessToken()
          .getJwtToken()}`,
      },
    };
    const { NextToken, ...rest } = await API.get(apiName, path, myInit);
    rest.NextToken = NextToken;
    return rest;
  }

  async updateUser(username, user): Promise<any> {
    const apiName = 'AdminQueries';
    const path = '/updateUser';
    const myInit = {
      body: {
        username,
        name: user.name,
        email: user.email,
        phone_number: user.phone_number,
        patrocinador: user.patrocinador,
        identificacion: user.identificacion,
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${(await Auth.currentSession())
          .getAccessToken()
          .getJwtToken()}`,
      },
    };
    return await API.post(apiName, path, myInit);
  }

  async deleteUser(username): Promise<any> {
    const apiName = 'AdminQueries';
    const path = '/deleteUser';
    const myInit = {
      body: {
        username,
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${(await Auth.currentSession())
          .getAccessToken()
          .getJwtToken()}`,
      },
    };
    return await API.post(apiName, path, myInit);
  }

  async createUser(user): Promise<any> {
    const apiName = 'AdminQueries';
    const path = '/createUser';
    const myInit = {
      body: {
        username: user.username,
        name: user.name,
        email: user.email,
        phone_number: user.phone_number,
        patrocinador: user.patrocinador,
        identificacion: user.identificacion,
        temp_password: user.temp_password,
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${(await Auth.currentSession())
          .getAccessToken()
          .getJwtToken()}`,
      },
    };
    return await API.post(apiName, path, myInit);
  }
  async disableUser(username): Promise<any> {
    const apiName = 'AdminQueries';
    const path = '/disableUser';
    const myInit = {
      body: {
        username,
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${(await Auth.currentSession())
          .getAccessToken()
          .getJwtToken()}`,
      },
    };
    return await API.post(apiName, path, myInit);
  }
  async enableUser(username): Promise<any> {
    const apiName = 'AdminQueries';
    const path = '/enableUser';
    const myInit = {
      body: {
        username,
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${(await Auth.currentSession())
          .getAccessToken()
          .getJwtToken()}`,
      },
    };
    return await API.post(apiName, path, myInit);
  }
}
