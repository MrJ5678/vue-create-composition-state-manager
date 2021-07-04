export const login = async () =>
  await new Promise(resolve => {
    setTimeout(() => {
      resolve({
        firstName: "Jiang",
        lastName: "longdong",
      })
    }, 2000)
  })
