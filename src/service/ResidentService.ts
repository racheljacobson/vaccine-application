import { Injectable } from '@angular/core';

@Injectable()
export class ResidentService {
    findAllResidents = () =>
        fetch('http://localhost:8080/api/resident')
            .then(response => response.json())
}