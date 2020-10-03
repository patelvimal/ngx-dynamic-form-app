import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseControlComponent } from '../base.component';

@Component({
    selector: 'file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent extends BaseControlComponent implements OnInit {
    @ViewChild("fileInput", { static: false }) fileInput: ElementRef;
    files = [];

    constructor(fb: FormBuilder) {
        super(fb);
    }

    ngOnInit(): void {
    }

    onClick() {
        const fileInput = this.fileInput.nativeElement;
        fileInput.onchange = () => {
            for (let index = 0; index < fileInput.files.length; index++) {
                const file = fileInput.files[index];
                this.files.push({ data: file, inProgress: false, progress: 0 });
            }
        };
        fileInput.click();
    }

}
