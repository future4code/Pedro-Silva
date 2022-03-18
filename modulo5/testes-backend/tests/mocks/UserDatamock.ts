import { user } from "../../src/types/user"
import { userMock, userMock2 } from "./usermocks"

export class UserDataBaseMock{
     public async getUserById(id: string): Promise<user | undefined> {
        if(id === "id_mockado"){
            return userMock
        }else if(id === "id_mockado_2"){
            return userMock2
        }else{
            undefined
        }
    }
   
}