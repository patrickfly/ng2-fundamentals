import {Component, OnInit} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {ISession} from '../shared/index'
@Component({
    templateUrl:
        'app/events/event-details/create-session.component.html'
})
export class CreateSessionComponent implements OnInit{
    newSessionForm: FormGroup
    name: FormControl
    presenter: FormControl
    duration: FormControl
    level: FormControl
    abstract: FormControl

    ngOnInit(){
        this.name = new FormControl('', Validators.required)
        this.presenter = new FormControl('', Validators.required)
        this.duration = new FormControl('', Validators.required)
        this.level = new FormControl('', Validators.required)
        this.abstract = new FormControl('', [Validators.required,
            Validators.maxLength(400)])

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        })
    }

    private restrictedWords(control: FormControl):{[key: string]:any}{
        return control.value.includes('foo')
            ?{'restrictedWords': 'foo'}
            : null
    }

    saveSession(formValues){
        let session:ISession = {
            name: formValues.name

        }
    }
}