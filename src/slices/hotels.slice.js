import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import hotelsService from '../services/hotels.service';
import { processThunk } from '../utils/response';

const initialState = {
    list: [],
    typeRooms: [],
    roomAccommodations: [],
    loading: {
        hotels: false,
        assign: false
    },
    error: null
}

export const createHotel = createAsyncThunk("hotels/create", async (hotel, { rejectWithValue }) => {

    const response = await hotelsService.create(hotel);
    return processThunk(response, rejectWithValue);
});

export const allHotels = createAsyncThunk("hotels/list", async (data, { rejectWithValue }) => {

    const response = await hotelsService.all();
    return processThunk(response, rejectWithValue);
});

export const allTypeRooms = createAsyncThunk("hotels/types/rooms", async (data, { rejectWithValue }) => {
    const response = await hotelsService.allTypeRooms();
    return processThunk(response, rejectWithValue);
});

export const allRoomsAccommodations = createAsyncThunk("hotels/types/rooms/accommodations", async (roomId, { rejectWithValue }) => {
    const response = await hotelsService.allRoomAccommodations(roomId);
    return processThunk(response, rejectWithValue);
});

export const assignRoomsHotel = createAsyncThunk("hotels/rooms/assign", async (hotelRoom, { rejectWithValue }) => {
    const response = await hotelsService.assignRoomHotel(hotelRoom.typeRoom,hotelRoom.combination,hotelRoom.rooms);
    return processThunk(response, rejectWithValue);
});



export const hotelSlice = createSlice({
    name: 'hotels',
    initialState,
    reducers: {},
    extraReducers: (builder) => {



        builder.addCase(assignRoomsHotel.fulfilled, (state, action) => {
            state.loading.assign = false;
        });
        builder.addCase(assignRoomsHotel.rejected, (state, action) => {
            state.error = action.payload;
        });


        builder.addCase(createHotel.pending, (state, action) => {
            if (!state.loading.hotels) {
                state.loading.hotels = true;
            }
        });
        builder.addCase(createHotel.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
        builder.addCase(createHotel.fulfilled, (state, action) => {
            state.loading = false;
            state.list.push(action.payload.data);
        });
        builder.addCase(allHotels.fulfilled, (state, action) => {
            state.list = action.payload.data;
        });
        builder.addCase(allTypeRooms.fulfilled, (state, action) => {
            state.typeRooms = action.payload.data;
        });
    

        builder.addCase(allRoomsAccommodations.fulfilled, (state, action) => {
            state.roomAccommodations = action.payload;
        });
    }

});


export default hotelSlice.reducer;
