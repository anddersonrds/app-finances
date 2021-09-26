import React from 'react'
import { FlatList } from 'react-native-gesture-handler'

import Button from '../../components/Form/Button'

import { categories } from '../../utils/categories'

import * as S from './styles'

type Category = {
  key: string
  name: string
}

export type CategorySelectProps = {
  category: Category
  setCategory: (category: Category) => void
  closeSelectCategory: () => void
}

const CategorySelect = ({
  category,
  setCategory,
  closeSelectCategory
}: CategorySelectProps) => {
  const handleSetCategory = (category: Category): void => {
    setCategory(category)
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>Categoria</S.Title>
      </S.Header>

      <FlatList
        data={categories}
        style={{ flex: 1, width: '100%' }}
        keyExtractor={item => item.key}
        ItemSeparatorComponent={() => <S.Divider />}
        renderItem={({ item }) => (
          <S.Category
            onPress={() => handleSetCategory(item)}
            isActive={category.key === item.key}
          >
            <S.Icon name={item.icon} />
            <S.Name>{item.name}</S.Name>
          </S.Category>
        )}
      />

      <S.Footer>
        <Button title="Selecionar" onPress={closeSelectCategory} />
      </S.Footer>
    </S.Wrapper>
  )
}

export default CategorySelect
