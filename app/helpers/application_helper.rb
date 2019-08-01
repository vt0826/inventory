# :nodoc:
module ApplicationHelper
  Rails.application.routes.url_helpers
  def left_menu
    left_menu_entries(left_menu_content)
  end

  private

  def selected_locale
    locale = FastGettext.locale
    locale_list.detect {|entry| entry[:locale] == locale}
  end

  def locale_list
    [
      {
        flag: 'us',
        locale: 'en',
        name: 'English (US)',
        alt_name: 'United States'
      },
      {
        flag: 'fr',
        locale: 'fr',
        name: 'Français',
        alt_name: 'France'
      },
      {
        flag: 'es',
        locale: 'es',
        name: 'Español',
        alt_name: 'Spanish'
      },
      {
        flag: 'de',
        locale: 'de',
        name: 'Deutsch',
        alt_name: 'German'
      },
      {
        flag: 'jp',
        locale: 'ja',
        name: '日本語',
        alt_name: 'Japan'
      },
      {
        flag: 'cn',
        locale: 'zh',
        name: '中文',
        alt_name: 'China'
      },
      {
        flag: 'it',
        locale: 'it',
        name: 'Italiano',
        alt_name: 'Italy'
      },
      {
        flag: 'pt',
        locale: 'pt',
        name: 'Portugal',
        alt_name: 'Portugal'
      },
      {
        flag: 'ru',
        locale: 'ru',
        name: 'Русский язык',
        alt_name: 'Russia'
      },
      {
        flag: 'kr',
        locale: 'kr',
        name: '한국어',
        alt_name: 'Korea'
      },
    ]
  end

  def left_menu_entries(entries = [])
    output = ''
    entries.each do |entry|
      children_selected = entry[:children] &&
        entry[:children].any? {|child| current_page?(child[:href]) }
      entry_selected =  current_page?(entry[:href])
      li_class =
      case
        when children_selected
          'open'
        when entry_selected
          'active'
      end
      output +=
        content_tag(:li, class: li_class) do
          subentry = ''
          subentry +=
            link_to entry[:href], title: entry[:title], class: entry[:class], target: entry[:target] do
              link_text = ''
              link_text += entry[:content].html_safe
              if entry[:children]
                if children_selected
                  link_text += '<b class="collapse-sign"><em class="fa fa-minus-square-o"></em></b>'
                else
                  link_text += '<b class="collapse-sign"><em class="fa fa-plus-square-o"></em></b>'
                end
              end

              link_text.html_safe
            end
          if entry[:children]
            if children_selected
              ul_style = 'display: block'
            else
              ul_style = ''
            end
            subentry +=
              "<ul style='#{ul_style}'>" +
                left_menu_entries(entry[:children]) +
                "</ul>"
          end

          subentry.html_safe
        end
    end
    output.html_safe
  end


  def left_menu_content
    [
      {
        href: dashboards_path,
        title: _('dashboard'),
        content: "<i class='fa fa-lg fa-fw fa-tachometer'></i> <span class='menu-item-parent'>" + _('Dashboard') + "</span>",
      },
      {
        href: '#',
        content: "<i class='fa fa-lg fa-fw fa-archive'></i> <span class='menu-item-parent'>" + _('Inventory') + "</span>",
        children: [
          {
            href: inventories_path, 
            title: _('inventory'),
            content: "<i class='fa fa-lg fa-fw fa-list'></i> <span class='menu-item-parent'>" + _('Inventory Index') + "</span>"
          },
          {
            href: new_inventory_path, 
            title: _('inventroy'),
            content: "<i class='fa fa-lg fa-fw fa-plus-square-o'></i> <span class='menu-item-parent'>" + _('Add Inventory') + "</span>"
          },
        ]
      },
      {
        href: '#',
        content: "<i class='fa fa-lg fa-fw fa-home'></i> <span class='menu-item-parent'>" + _('Store') + "</span>",
        children: [
          {
            href: new_user_path, 
            content: "<i class='fa fa-lg fa-fw fa-plus-square-o'></i> <span class='menu-item-parent'>" + _('Add User') + "</span>"
          },
          {
            href: users_path, 
            content: "<i class='fa fa-lg fa-fw fa-list'></i> <span class='menu-item-parent'>" + _('User Index') + "</span>"
          },
          {
            href: organization_path(current_store.id), 
            content: "<i class='fa fa-lg fa-fw fa-info-circle'></i> <span class='menu-item-parent'>" + _('Store Info') + "</span>"
          },
          {
            href:  edit_organization_path(current_store.id), 
            content: "<i class='fa fa-lg fa-fw fa-cogs'></i> <span class='menu-item-parent'>" + _('Edit Store') + "</span>"
          },
        ]
      },
      {
        href: '#',
        content: "<i class='fa fa-lg fa-fw fa-credit-card'></i> <span class='menu-item-parent'>" + _('Sale Order') + "</span>",
        children: [
          {
            href: new_sale_path, 
            content: "<i class='fa fa-lg fa-fw fa-shopping-cart'></i> <span class='menu-item-parent'>" + _(' New Order') + "</span>"
          },
          {
            href: sales_path, 
            content: "<i class='fa fa-lg fa-fw fa-money'></i> <span class='menu-item-parent'>" + _('Invoices') + "</span>"
          },
          {
            href: sales_shipment_path, 
            content: "<i class='fa fa-lg fa-fw fa-truck'></i> <span class='menu-item-parent'>" + _('Shipment') + "</span>"
          },

          {
            href: sales_return_path, 
            content: "<i class='fa fa-lg fa-fw fa-plus-square-o'></i> <span class='menu-item-parent'>" + _('Return') + "</span>"
          },
        ]
      },
      {
        href: relationships_path,
        content: "<i class='fa fa-lg fa-fw fa fa-users'></i> <span class='menu-item-parent'>" + _('Relationship') + "</span>",
      },
      {
        href: purchases_path,
        content: "<i class='fa fa-lg fa-fw fa-check-square-o'></i> <span class='menu-item-parent'>" + _('Stock Control') + "</span>",
      },
    ]
  end
end

