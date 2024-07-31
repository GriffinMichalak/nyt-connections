class Card {
    public title: string;
    public category: string;
    public color: string; 
    public found: boolean; 

    constructor(title: string, category: string, color: string, found: boolean) {
        this.title = title;
        this.category = category;
        this.color = color;
        this.found = found;
    }
}

export { Card };