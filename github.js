class Github {
    constructor() {
        this.client_id = 'fa6439d734961ee997c4';
        this.client_secret = 'cecb213e2b0ae1690d702cca63df66d185f3dadd';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}