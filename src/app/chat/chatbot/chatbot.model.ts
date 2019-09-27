export class Chatbot {
    public name: string;
    public jobTitle: string;
    public description: string;
    public imagePath: string;
  
    constructor(name: string, jobTitle: string, desc: string, imagePath: string) {
      this.name = name;
      this.jobTitle = jobTitle;
      this.description = desc;
      this.imagePath = imagePath;
    }
  }
  