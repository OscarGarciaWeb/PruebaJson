<template>
  <h2 class="title">Datos Personales</h2>
  <table class="table-style">
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Edad</th>
        <th>Altura</th>
        <th>Peso</th>
        <th>Ciudad</th>
        <th>País</th>
        <th>Estudios</th>
        <th>Género</th>
        <th>Grupo sanguíneo</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="person in people" :key="person.person_id">
        <td>{{ person.name || 'N/A' }}</td>
        <td>{{ person.surname1 || 'N/A' }}</td>
        <td>{{ person.age || 'N/A' }}</td>
        <td>{{ person.height || 'N/A' }}</td>
        <td>{{ person.weight || 'N/A' }}</td>

        <!-- Initial Solution -->
        <td>
          {{ getCityById(person.city_id).cityName ? 
             getCityById(person.city_id).cityName : 'N/A' }}
        </td>
        <td>
          {{ getCountryById(getCityById(person.city_id).country_id).countryName ?
             getCountryById(getCityById(person.city_id).country_id).countryName : 'N/A' }}
        </td>
        <td>
          {{ getStudyById(person.study_id) ? 
             getStudyById(person.study_id).level : 'N/A' }}
        </td>
        <td>
          {{ getGenderById(person.gender_id) ? 
             getGenderById(person.gender_id).type : 'N/A' }}
        </td>
        <td>
          {{ getBloodTypeById(person.bloodtype_id) ? 
             getBloodTypeById(person.bloodtype_id).bloodName : 'N/A' }}
        </td>
        <!-- Initial Solution -->
      </tr>
    </tbody>
  </table>
</template>
<script lang="ts">
export default {
  data(): any {
    return {
      "people": [
        {
          "person_id": "1",
          "name": "Laurie",
          "surname1": "Moreau",
          "age": 10,
          "height": 130,
          "weight": 32,
          "city_id": "5",
          "study_id": "1",
          "gender_id": "2",
          "bloodtype_id": "1"
        },
        {
          "person_id": "2",
          "name": "María",
          "surname1": "Martínez",
          "age": 40,
          "height": 165,
          "Weight": 55,
          "city_id": "2",
          "study_id": null,
          "gender_id": "2",
          "bloodtype_id": "4"
        },
        {
          "person_id": "3",
          "name": "Akita",
          "surname1": "Yamaguchi",
          "age": 85,
          "height": 160,
          "weight": 63,
          "city_id": "3",
          "study_id": "1",
          "gender_id": "1",
          "bloodtype_id": "2"
        },
        {
          "person_id": "4",
          "name": "Javiera",
          "surname1": "García",
          "age": 25,
          "height": 150,
          "weight": 70,
          "city_id": "1",
          "study_id": "2",
          "gender_id": "2",
          "bloodtype_id": "3"
        },
        {
          "person_id": "5",
          "name": "Fausta",
          "surname1": "Sanz",
          "age": 55,
          "height": 155,
          "weight": 65,
          "city_id": "4",
          "study_id": null,
          "gender_id": "2",
          "bloodtype_id": "1"
        }
      ],
      "cities": [
        {
          "city_id": "1",
          "cityName": "Pamplona",
          "country_id": "1"
        },
        {
          "city_id": "2",
          "cityName": "Santa Cruz de Tenerife",
          "country_id": "1"
        },
        {
          "city_id": "3",
          "cityName": "Tokyo",
          "country_id": "4"
        },
        {
          "city_id": "4",
          "cityName": "Bogotá",
          "country_id": "3"
        },
        {
          "city_id": "5",
          "cityName": "Burdeos",
          "country_id": "2"
        }
      ],
      "countries": [
        {
          "country_id": "1",
          "countryName": "España"
        },
        {
          "country_id": "2",
          "countryName": "Francia"
        },
        {
          "country_id": "3",
          "countryName": "Colombia"
        },
        {
          "country_id": "4",
          "countryName": "Japón"
        }
      ],
      "studies": [
        {
          "study_id": "1",
          "level": "Universidad"
        },
        {
          "study_id": "2",
          "level": "Instituto"
        }
      ],
      "gender": [
        {
          "gender_id": "1",
          "type": "Hombre"
        },
        {
          "gender_id": "2",
          "type": "Mujer"
        }
      ],
      "bloodType": [
        {
          "bloodType_id": "1",
          "bloodName": "A"
        },
        {
          "bloodType_id": "2",
          "bloodName": "B"
        },
        {
          "bloodType_id": "3",
          "bloodName": "AB"
        },
        {
          "bloodType_id": "4",
          "bloodName": "0"
        }
      ]
    }
  },
  mounted() {},
  methods: {
    getCityById(cityId: any): any {
      return this.cities.find((city: any) => city.city_id === cityId); 
    },
    getCountryById(countryId: any): any {
      return this.countries.find((country: any) => country.country_id === countryId);
    },
    getStudyById(studyId: any): any { 
      return this.studies.find((study: any) => study.study_id === studyId);
    },
    getGenderById(genderId: any) {
      return (this.gender).find((gender: any) => gender.gender_id === genderId);
    },
    getBloodTypeById(bloodTypeId: any): any {
      return this.bloodType.find((bloodType: any) => bloodType.bloodType_id === bloodTypeId);
    }
  },
}
</script>

<style></style>
