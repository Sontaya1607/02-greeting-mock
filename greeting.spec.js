function Greeting(realnameService) {
    this.realnameService = realnameService

    this.echo = (nickname) => {
        var firstname = realnameService(nickname)
        return `Hello ${firstname}!`
    }
}

test ('Greeting', () => {
    //Arrange
    const mockRealnameService = jest.fn()
        .mockReturnValue('Sontaya')

    var app = new Greeting(mockRealnameService)

    //Act
    var nickname = 'Golf'
    var result = app.echo(nickname)

    //Assert
    expect(mockRealnameService).toHaveBeenCalledWith(nickname)
    expect(mockRealnameService).toHaveBeenCalled()
    expect(result).toBe('Hello Sontaya!')

})
