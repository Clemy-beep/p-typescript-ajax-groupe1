export default class User{
    #userId?: number;
    #username?: string;

    constructor(userId?: number, username?: string){
        this.#userId = userId;
        this.#username = username;
    }

    get userId(): number {return this.#userId ?? 0;}
    get username(): string {return this.#username ?? "";}
    set username(value: string) {this.#username = value;}
    set userId(userId : number) {this.#userId = userId;}
    static getUser() {
        $.ajax({
            type: "GET",
            url:"https://api.blog.quidam.re/api/getUser.php",
            dataType: "JSON",
            success: function (response: any) {
                console.log(response);
                if (response.length > 0) {
                    console.log(response);
                    response.forEach((utilisateur : User) => {
                        let newUser = new User(utilisateur.userId);
                        let html = `<a style="display:block" href="./public/views/user-profile.html?id=${utilisateur.userId}">${utilisateur.username}</a>`;
                        $('#Username')?.append(html);
                    });
                } else $('#Username').html('no user found');
            },
            error: function(error) {
                console.log(error);
            }
        })

}