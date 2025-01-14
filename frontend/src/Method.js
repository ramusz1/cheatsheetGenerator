import React from 'react';
import Parameter from './Parameter';
import Example from './Example';

export default function Method({ method }) {
    if (!method) {
        return null;
    }

    return (
        <div className="method">
            <p>
                <font className="method-name">{method.name}{method.withoutBrackets !== true && '('}</font>
                    <font className="method-parameter">{method.withoutBrackets !== true && method.params && method.params.map(p => p.name).join(', ')}</font>
                <font className="method-name">{method.withoutBrackets !== true && ')'}</font>
            </p>            
            <p className="method-description">{method.description}</p>
            {method.params && method.params.map((p, i) =>  
                <Parameter 
                    key={i}
                    parameter={p}
                />
            )}
            {method.examples && method.examples.map((e, i) =>  
                <Example 
                    key={i}
                    example={e}
                />
            )}
        </div>
    );
}