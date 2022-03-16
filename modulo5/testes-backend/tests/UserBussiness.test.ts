import { UserBusiness } from "../src/business/Userbusiness"
import { UserDatabase } from "../src/data/UserDataBase"
import { UserDataBaseMock } from "./mocks/UserDatamock"

const userBusinessMock = new UserBusiness(new UserDataBaseMock as any)


describe("getUserById", () => {
	// (a)
   test("Should catch error when id is not registered", async () => {
    expect.assertions(1)

    try {
      await userBusinessMock.getUserById("abc")
    } catch (error:any) {
      expect(error.message).toBe("User not found")
    }
  })
    
	// (b)
  test("Should return respective user when id is registered", async () => {
    expect.assertions(2)
    
    try {
      const getUserById = jest.fn(
        (id: string) => userBusinessMock.getUserById(id)
      )
        
      const result = await getUserById("id_mockado")

      expect(getUserById).toHaveBeenCalledWith("id_mockado")
      expect(result).toEqual({
        id: "id_mockado",
        name: "astrodev",
        email: "astrodev@gmail.com",
        password:"astrodev123",
        role: "ADMIN",
      })
    } catch (error:any) {
      console.log(error.message)
    }
  })
})