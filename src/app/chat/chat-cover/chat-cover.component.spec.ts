import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatCoverComponent } from './chat-cover.component';

describe('ChatCoverComponent', () => {
  let component: ChatCoverComponent;
  let fixture: ComponentFixture<ChatCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatCoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
