/**
 * @author zenghongcong
 * api配置
 */
import axios from 'axios';

let url = 'static/data.json';

export default {
	getData: function(cb){
		axios.get(url).then(function(res){
			if(res.status >= 200 && res.status < 300){
                cb(res.data)
            }
		}).catch((error) => {
            return Promise.reject(error)
        })
	}
}
