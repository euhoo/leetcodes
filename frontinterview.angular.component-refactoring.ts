// необходимо порефакторить
@Component({
  selector: 'users-component',
  template: `
  <div>{{user.name}}</div>
  `,
})
export class UsersComponent {
  @Input() userId: string;
  user: {name: string};

  constructor() {
    const userService$ = new UserService();
    userService$.getUserInfo(this.userId).subscribe(user => this.user = user);
  }
}
