class Card {
    public title: string;
    public category: string;
    public color: string; 
    public selected: boolean; 
    public found: boolean; 
    public textColor: string;
    public backgroundColor: string; 

    constructor(title: string, category: string, color: string) {
        this.title = title;
        this.category = category;
        this.color = color;
        this.selected = false;
        this.found = false;
        this.textColor = 'black';
        this.backgroundColor = '#e5e4e2';
    }
}

export { Card };