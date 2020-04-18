export const fetchIsLoggedIn = () => {
		return fetch('/session', {
			method: 'GET',
			headers: new Headers({
				'content-type': 'application/json',
			})
		})
		.catch( () => {
			return Promise.reject({code: 'No Session'});
		})
		.then( (response) => {
			 
			if(!response.ok) {
				return response.json().then( result => Promise.reject(result) );
			}
			return response.json();
		});
};

export const fetchLogin = (username) => {
		return fetch('/session', {
			method: 'POST',
			headers: new Headers({
				'content-type': 'application/json',
			}),
			body: JSON.stringify({ username }),
		})
		.catch( () => {
			return Promise.reject({code: 'network-error'});
		})
		.then( (response) => {
			 
			if(!response.ok) {
				return response.json().then( result => Promise.reject(result) );
			}
			return response.json();
		});
};

export const fetchLogout = () => {
		return fetch('/session', {
			method: 'DELETE',
			headers: new Headers({
				'content-type': 'application/json',
			})
		})
		.catch( () => {
			return Promise.reject({code: 'network-error'});
		})
		.then( (response) => {
			 
			if(!response.ok) {
				return response.json().then( result => Promise.reject(result) );
			}
			return;
		});
};

export const fetchCourses = () => {
		return fetch('/courses', {
			method: 'GET',
			headers: new Headers({
				'content-type': 'application/json',
			})
		})
		.catch( () => {
			return Promise.reject({code: 'network-error'});
		})
		.then( (response) => {
			 
			if(!response.ok) {
				return response.json().then( result => Promise.reject(result) );
			}
			return response.json();
		});
}

export const fetchAddToCart = id => {
	return fetch(`/cartApi/${id}`, {
        method: 'PUT',
        headers: new Headers({
            'content-type': 'application/json',
        })
    })
    .catch( () => {
        return Promise.reject({code: 'network-error'});
    })
    .then( (response) => {
            
        if(!response.ok) {
            return response.json().then( result => Promise.reject(result) );
        }
        return;
    });
}

export const fetchRemoveFromCart = id => {
	return fetch(`/cartApi/${id}`, {
        method: 'DELETE',
        headers: new Headers({
            'content-type': 'application/json',
        })
    })
    .catch( () => {
        return Promise.reject({code: 'network-error'});
    })
    .then( (response) => {
            
        if(!response.ok) {
            return response.json().then( result => Promise.reject(result) );
        }
        return;
    });
}

export const fetchCheckout = () => {
	return fetch('/cartApi/checkout', {
        method: 'GET',
        headers: new Headers({
            'content-type': 'application/json',
        })
    })
    .catch( () => {
        return Promise.reject({code: 'network-error'});
    })
    .then( (response) => {
            
        if(!response.ok) {
            return response.json().then( result => Promise.reject(result) );
        }
        return response.json();
    });
}