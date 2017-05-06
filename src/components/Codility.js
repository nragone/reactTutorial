import React, { Component } from 'react';

class Codility extends Component {

    componentWillMount() {
    }

    test1(A) {
        //Result was 40% or something like that :(
        var aux;
        var change = {val: false, pos: 0};

        if (this.sorted(A)) return A;


        //First element not in order
        for (let i=0; i < A.length; i++) {

            if (A[i] > A[i+1]) {
                aux = A[i];
                A[i] = A[i+1];
                A[i+1] = aux;
                if (this.sorted(A)) {
                    return A;
                } else {
                    aux = A[i];
                    A[i] = A[i+1];
                    A[i+1] = aux;
                    change = {val: A[i], pos: i};
                    break;
                }
            }
        }

        //Change element with others and test again
        for (let j=change.pos + 2; j < A.length; j++) {
            if (A[change.pos] > A[j]) {
                aux = A[change.pos];
                A[change.pos] = A[j];
                A[j] = aux;
                if (this.sorted(A)) {
                    return A;
                } 
            }
        }

        return false;

    }

    sorted(A) {
        for(let i=0; i < A.length; i++) {
            if (A[i+1] < A[i]) return false;
        }
        return true;
    }

    test2(A,B,X,Y) {
        /*Elevator
        A: Weight
        B: Floor
        X: People max
        Y: Weight limit
        N: People
        */
        var totalWeight = 0, people = 0;
        var floorsList = [];
        var stops = 0;

        if (A.length === 0) return 0;

        for (let i = 0; i < A.length; i++) {

            if ((totalWeight + A[i] <= Y) && (people + 1 <= X)) {
                //Sube
                totalWeight += A[i];
                people++;

                if (floorsList.indexOf(B[i]) < 0) {
                    floorsList.push(B[i]);
                    stops++;
                }

            } else {
                totalWeight = A[i];
                people = 1;
                floorsList = [];
                floorsList.push(B[i]);
                stops += 2;
            }
        }

        stops++;

        return (
            <td>
                <p>Max Persons: {X}</p>
                <p>Max Weight: {Y} kg</p>
                <h2>Passengers</h2>
                {A.map((val, index) => 
                    <div key={index}>
                        <div>Weight: {val} kg</div>
                        <div>Floor: {B[index]}</div>
                        ---------------------------------
                    </div>
                )}

                <h2>Stops: {stops}</h2>
            </td>
        )
    }

    render() {

        return (
            <div className="component">
                <h1>Codility Test TOPTAL</h1>

                <div className="component">
                    <h1>One swap, ordered?</h1>
                    <h2>A[1,5,3,3,7]: {this.test1([1,5,3,3,7])}</h2>
                    <h2>B[1,3,5,3,4]: {this.test1([1,3,5,3,4]) || 'False'}</h2>
                    <h2>C[1,2,3,4]: {this.test1([1,2,3,4]) || 'False'}</h2>
                    <h2>D[1,3,2]: {this.test1([1,3,2]) || 'False'}</h2>
                    <h2>E[4,1,3,5]: {this.test1([4,1,3,5]) || 'False'}</h2>
                </div>

                <div className="component">
                    <h1>Elevator</h1>
                    <table>
                        <tbody>
                            <tr>
                                {this.test2([60,80,40,70,50], [2,5,4,3,1], 2, 200)}
                                {this.test2([60,80,40,70,50], [2,5,4,3,1], 3, 200)}
                                {this.test2([60,80,2,70,50], [2,5,2,3,1], 3, 200)}
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            </div>
        );
    }
}

export default Codility;