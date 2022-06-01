import axios from '../utils/axios';
import { processRequest } from '../utils/response';

class HotelService {

    async create(hotel) {
        const request = await processRequest(axios.post("/hotels", hotel));
        return request;
    }
    async all() {
        const request = await processRequest(axios.get("/hotels"));
        return request
    }
    async allTypeRooms() {
        const request = await processRequest(axios.get("/type-rooms"));
        return request;
    }
    async allRoomAccommodations(roomId) {
        const request = await processRequest(axios.get(`/type-rooms/${roomId}/accommodations`));
        return request;
    }

    async assignRoomHotel(hotelId, assignation, rooms) {
        const request = await processRequest(axios.post(`hotels/${hotelId}/type-rooms/assignation`,{
            hotel:hotelId,
            assignation,
            rooms
        }));

        return request;
    }

}

export default new HotelService();

